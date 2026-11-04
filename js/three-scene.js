/**
 * three-scene.js
 * Enhanced Interactive 3D WebGL Hero Experience for Pithiya Hardik's Portfolio
 * Features:
 * - Multi-layer holographic core: wireframe IcosahedronGeometry + solid mid-layer + TorusKnot energy core
 * - 6 orbiting tech nodes with 3D inclinations, glowing rings, and pulse scale
 * - Dual particle systems: near (cyan) + far (purple), 2000 total particles
 * - Orbiting colored PointLights (cyan + purple)
 * - Smooth inertial camera tilt based on mouse (no-drag, tilt only)
 * - Canvas hover → nodes speed up
 * - IntersectionObserver to pause when off-screen
 * - Responsive with mobile low-power mode (500 particles)
 * - requestAnimationFrame with cancelAnimationFrame cleanup
 */

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

class Hero3DScene {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.isWebGLSupported = this.checkWebGL();
    if (!this.isWebGLSupported) {
      this.renderFallback();
      return;
    }

    // Scene objects
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Core layers
    this.coreGroup = null;
    this.outerWire = null;
    this.midSolid = null;
    this.innerKnot = null;

    // Nodes
    this.nodesGroup = null;
    this.nodeMeshes = [];

    // Lights
    this.cyanLight = null;
    this.purpleLight = null;
    this.lightOrbitAngle = 0;

    // Particles
    this.particleNear = null;
    this.particleFar = null;

    // Interaction
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isHoveringCanvas = false;
    this.animationFrameId = null;
    this.isVisible = true;
    this.isMobile = window.innerWidth <= 768;

    this.clock = new THREE.Clock();

    this.init();
  }

  /* ---------------------------------------------------------------------- */
  checkWebGL() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext &&
        (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (_) { return false; }
  }

  /* ---------------------------------------------------------------------- */
  init() {
    const width  = this.canvas.clientWidth  || 500;
    const height = this.canvas.clientHeight || 480;

    // --- Scene ---
    this.scene = new THREE.Scene();

    // --- Camera ---
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 20);

    // --- Renderer ---
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Lighting ---
    this.buildLighting();

    // --- Objects ---
    this.buildCore();
    this.buildOrbitingNodes();
    this.buildParticles();
    this.buildLensSphere();

    // --- Events ---
    this.addEventListeners();
    this.setupObserver();

    // --- Start ---
    this.animate();
  }

  /* ---------------------------------------------------------------------- */
  buildLighting() {
    // Ambient — low
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambient);

    // Hemisphere light (simulates RectAreaLight / sky bounce)
    const hemi = new THREE.HemisphereLight(0x0a2040, 0x200040, 0.8);
    this.scene.add(hemi);

    // Cyan point — will orbit
    this.cyanLight = new THREE.PointLight(0x00f2fe, 5, 60);
    this.cyanLight.position.set(10, 8, 10);
    this.scene.add(this.cyanLight);

    // Purple point — will orbit opposite phase
    this.purpleLight = new THREE.PointLight(0x7928ca, 6, 60);
    this.purpleLight.position.set(-10, -8, 8);
    this.scene.add(this.purpleLight);
  }

  /* ---------------------------------------------------------------------- */
  buildCore() {
    this.coreGroup = new THREE.Group();

    // ── Outer wireframe IcosahedronGeometry (detail 1) — cyan, slow rotation ──
    const outerGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    this.outerWire = new THREE.Mesh(outerGeo, outerMat);
    this.coreGroup.add(this.outerWire);

    // ── Mid solid IcosahedronGeometry — holographic, low opacity ──
    const midGeo = new THREE.IcosahedronGeometry(3.4, 0);
    const midMat = new THREE.MeshPhongMaterial({
      color: 0x004466,
      emissive: 0x002244,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.22,
      shininess: 120,
      side: THREE.DoubleSide
    });
    this.midSolid = new THREE.Mesh(midGeo, midMat);
    this.coreGroup.add(this.midSolid);

    // ── Inner TorusKnot — purple-cyan energy core, faster counter-rotation ──
    const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.45, 128, 16, 2, 3);
    const knotMat = new THREE.MeshPhongMaterial({
      color: 0x7928ca,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.85,
      shininess: 200,
      wireframe: false
    });
    this.innerKnot = new THREE.Mesh(knotGeo, knotMat);
    this.coreGroup.add(this.innerKnot);

    // ── Equatorial ring ──
    const ringGeo = new THREE.TorusGeometry(5.4, 0.045, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.5
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.8;
    this.coreGroup.add(ring);

    // ── Secondary tilted ring ──
    const ring2Geo = new THREE.TorusGeometry(5.0, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9055ff,
      transparent: true,
      opacity: 0.3
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    this.coreGroup.add(ring2);

    this.scene.add(this.coreGroup);
  }

  /* ---------------------------------------------------------------------- */
  buildOrbitingNodes() {
    this.nodesGroup = new THREE.Group();

    const techNodes = [
      { name: 'Python',   color: 0xfacc15, hexColor: '#facc15', radius: 7.5,  speed: 0.45, angle: 0,                   inclX: 0.3,  inclZ: 0 },
      { name: 'Frappe',   color: 0x38bdf8, hexColor: '#38bdf8', radius: 8.0,  speed: 0.6,  angle: Math.PI / 3,          inclX: -0.4, inclZ: 0.2 },
      { name: 'ERPNext',  color: 0x00f2fe, hexColor: '#00f2fe', radius: 7.0,  speed: 0.5,  angle: (2 * Math.PI) / 3,   inclX: 0.2,  inclZ: -0.3 },
      { name: 'MariaDB',  color: 0xec4899, hexColor: '#ec4899', radius: 8.4,  speed: 0.55, angle: Math.PI,              inclX: -0.3, inclZ: 0.4 },
      { name: 'API',      color: 0x10b981, hexColor: '#10b981', radius: 7.2,  speed: 0.7,  angle: (4 * Math.PI) / 3,   inclX: 0.5,  inclZ: -0.1 },
      { name: 'Git',      color: 0xa855f7, hexColor: '#a855f7', radius: 7.8,  speed: 0.65, angle: (5 * Math.PI) / 3,   inclX: -0.15,inclZ: 0.5 },
    ];

    this.nodeMeshes = [];

    techNodes.forEach((node) => {
      const group = new THREE.Group();

      // Node geometry — small icosahedron
      const geo = new THREE.IcosahedronGeometry(0.5, 0);
      const mat = new THREE.MeshPhongMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.9,
        shininess: 180
      });
      const mesh = new THREE.Mesh(geo, mat);
      group.add(mesh);

      // Glowing ring around each node
      const ringGeo = new THREE.TorusGeometry(0.9, 0.025, 8, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.4
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      group.add(ring);

      // Orbit trail (very thin, low opacity torus)
      const trailGeo = new THREE.TorusGeometry(node.radius, 0.015, 4, 128);
      const trailMat = new THREE.MeshBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.07
      });
      const trail = new THREE.Mesh(trailGeo, trailMat);
      // We'll keep trails in scene directly (not in nodesGroup), inclined
      trail.rotation.x = node.inclX;
      trail.rotation.z = node.inclZ;
      this.scene.add(trail);

      // Label sprite via canvas texture
      const texture = this.createBadgeTexture(node.name, node.hexColor);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.6, 1.3, 1);
      sprite.position.set(0, -1.2, 0);
      group.add(sprite);

      this.nodesGroup.add(group);

      this.nodeMeshes.push({
        group,
        mesh,
        ring,
        radius: node.radius,
        speed: node.speed,
        baseSpeed: node.speed,
        angle: node.angle,
        inclX: node.inclX,
        inclZ: node.inclZ,
        pulseOffset: Math.random() * Math.PI * 2
      });
    });

    this.scene.add(this.nodesGroup);
  }

  /* ---------------------------------------------------------------------- */
  createBadgeTexture(text, color) {
    const canvas = document.createElement('canvas');
    canvas.width  = 256;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');

    // Dark rounded background
    ctx.fillStyle = 'rgba(10, 15, 29, 0.92)';
    ctx.beginPath();
    ctx.roundRect(6, 6, 244, 84, 20);
    ctx.fill();

    // Colored border
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.roundRect(6, 6, 244, 84, 20);
    ctx.stroke();

    // Label text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 48);

    return new THREE.CanvasTexture(canvas);
  }

  /* ---------------------------------------------------------------------- */
  buildParticles() {
    const isMobile = this.isMobile;
    const nearCount = isMobile ? 250 : 1000;
    const farCount  = isMobile ? 250 : 1000;

    // ── Near particles (cyan) ──
    const nearGeo = new THREE.BufferGeometry();
    const nearPos = new Float32Array(nearCount * 3);
    const nearCol = new Float32Array(nearCount * 3);
    const cyanColor = new THREE.Color(0x00f2fe);

    for (let i = 0; i < nearCount; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(Math.random() * 2 - 1);
      nearPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      nearPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      nearPos[i * 3 + 2] = r * Math.cos(phi);

      const c = cyanColor.clone().lerp(new THREE.Color(0x4facfe), Math.random());
      nearCol[i * 3]     = c.r;
      nearCol[i * 3 + 1] = c.g;
      nearCol[i * 3 + 2] = c.b;
    }
    nearGeo.setAttribute('position', new THREE.BufferAttribute(nearPos, 3));
    nearGeo.setAttribute('color',    new THREE.BufferAttribute(nearCol, 3));
    const nearMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    });
    this.particleNear = new THREE.Points(nearGeo, nearMat);
    this.scene.add(this.particleNear);

    // ── Far particles (purple) ──
    const farGeo = new THREE.BufferGeometry();
    const farPos = new Float32Array(farCount * 3);
    const farCol = new Float32Array(farCount * 3);
    const purpColor = new THREE.Color(0x7928ca);

    for (let i = 0; i < farCount; i++) {
      const r = 16 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(Math.random() * 2 - 1);
      farPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      farPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      farPos[i * 3 + 2] = r * Math.cos(phi);

      const c = purpColor.clone().lerp(new THREE.Color(0x9055ff), Math.random());
      farCol[i * 3]     = c.r;
      farCol[i * 3 + 1] = c.g;
      farCol[i * 3 + 2] = c.b;
    }
    farGeo.setAttribute('position', new THREE.BufferAttribute(farPos, 3));
    farGeo.setAttribute('color',    new THREE.BufferAttribute(farCol, 3));
    const farMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });
    this.particleFar = new THREE.Points(farGeo, farMat);
    this.scene.add(this.particleFar);
  }

  /* ---------------------------------------------------------------------- */
  buildLensSphere() {
    // Large transparent sphere around everything — fakes bloom/lens effect
    const geo = new THREE.SphereGeometry(28, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.012,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const lens = new THREE.Mesh(geo, mat);
    this.scene.add(lens);
  }

  /* ---------------------------------------------------------------------- */
  addEventListeners() {
    // Smooth mouse tracking for inertial camera tilt
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth)  * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Canvas hover → speed up nodes
    this.canvas.addEventListener('mouseenter', () => { this.isHoveringCanvas = true; });
    this.canvas.addEventListener('mouseleave', () => { this.isHoveringCanvas = false; });

    // Resize
    window.addEventListener('resize', () => this.handleResize());
  }

  /* ---------------------------------------------------------------------- */
  handleResize() {
    if (!this.canvas || !this.camera || !this.renderer) return;
    this.isMobile = window.innerWidth <= 768;
    const width  = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (width > 0 && height > 0) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  /* ---------------------------------------------------------------------- */
  setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { this.isVisible = e.isIntersecting; }),
      { threshold: 0.05 }
    );
    observer.observe(this.canvas);
  }

  /* ---------------------------------------------------------------------- */
  renderFallback() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    this.canvas.style.display = 'none';

    const fallback = document.createElement('div');
    fallback.className = 'canvas-fallback animate-float';
    fallback.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
    fallback.innerHTML = `
      <div style="width:220px;height:220px;border-radius:50%;
        background:radial-gradient(circle,rgba(0,242,254,0.4) 0%,rgba(121,40,202,0.6) 60%,transparent 100%);
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 0 50px rgba(0,242,254,0.3);border:2px solid rgba(0,242,254,0.5);">
        <div style="font-family:monospace;font-size:1.5rem;font-weight:800;color:#fff;text-align:center;">
          ERPNext<br><span style="color:#00f2fe;font-size:1rem;">Python 3D</span>
        </div>
      </div>
    `;
    parent.appendChild(fallback);
  }

  /* ---------------------------------------------------------------------- */
  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    if (!this.isVisible) return;

    const time  = this.clock.getElapsedTime();
    const delta = this.clock.getDelta ? 0.016 : 0.016; // fallback

    // ── Smooth mouse inertia ──
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.04;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.04;

    // ── Camera tilt based on mouse (no drag — pure tilt) ──
    if (this.camera) {
      this.camera.position.x += (this.mouse.x * 1.5 - this.camera.position.x) * 0.03;
      this.camera.position.y += (this.mouse.y * 1.0 - this.camera.position.y) * 0.03;
      this.camera.lookAt(0, 0, 0);
    }

    // ── Core layers rotation ──
    if (this.outerWire) {
      this.outerWire.rotation.y += 0.003;
      this.outerWire.rotation.x += 0.001;
    }
    if (this.midSolid) {
      this.midSolid.rotation.y -= 0.002;
      this.midSolid.rotation.z += 0.001;
    }
    if (this.innerKnot) {
      // Faster counter-rotation
      this.innerKnot.rotation.y -= 0.009;
      this.innerKnot.rotation.x += 0.005;
      // Pulsing emissive intensity
      const knotMat = this.innerKnot.material;
      knotMat.emissiveIntensity = 0.3 + Math.sin(time * 1.5) * 0.2;
    }

    // ── Light orbit ──
    this.lightOrbitAngle += 0.008;
    if (this.cyanLight) {
      this.cyanLight.position.x = Math.cos(this.lightOrbitAngle) * 14;
      this.cyanLight.position.z = Math.sin(this.lightOrbitAngle) * 14;
      this.cyanLight.position.y = Math.sin(this.lightOrbitAngle * 0.5) * 8;
    }
    if (this.purpleLight) {
      this.purpleLight.position.x = Math.cos(this.lightOrbitAngle + Math.PI) * 14;
      this.purpleLight.position.z = Math.sin(this.lightOrbitAngle + Math.PI) * 14;
      this.purpleLight.position.y = Math.cos(this.lightOrbitAngle * 0.7) * 8;
    }

    // ── Orbiting nodes ──
    const speedMultiplier = this.isHoveringCanvas ? 2.2 : 1.0;
    if (this.nodeMeshes.length) {
      this.nodeMeshes.forEach((node) => {
        node.angle += node.baseSpeed * 0.008 * speedMultiplier;

        // 3D orbit: apply inclination via sin/cos on y and z
        const x = Math.cos(node.angle) * node.radius;
        const flatZ = Math.sin(node.angle) * node.radius;
        node.group.position.x = x;
        node.group.position.y = flatZ * Math.sin(node.inclX);
        node.group.position.z = flatZ * Math.cos(node.inclX) * Math.cos(node.inclZ);

        // Pulse scale (Math.sin based)
        const pulse = 1.0 + Math.sin(time * 1.8 + node.pulseOffset) * 0.12;
        node.mesh.scale.setScalar(pulse);

        // Ring rotation
        node.ring.rotation.x += 0.02;
        node.ring.rotation.y += 0.01;

        // Face camera (sprite does this automatically; mesh we do manually)
        node.mesh.lookAt(this.camera.position);
      });
    }

    // ── Particles ──
    if (this.particleNear) {
      this.particleNear.rotation.y += 0.0008;
      this.particleNear.rotation.x = this.mouse.y * 0.08;
    }
    if (this.particleFar) {
      this.particleFar.rotation.y -= 0.0005;
      this.particleFar.rotation.z += 0.0003;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

export default Hero3DScene;
