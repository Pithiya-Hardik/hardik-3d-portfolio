/**
 * main.js
 * Primary application controller for Pithiya Hardik's 3D Portfolio
 */

import { personalInfo, careerTimeline, enterpriseCaseStudies, skillsData } from './portfolio-data.js';
import Hero3DScene from './three-scene.js';
import { initArchitectureVisualizer } from './architecture-flow.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Hero Canvas
  const heroScene = new Hero3DScene('heroCanvas3d');

  // 2. Initialize Architecture Visualizer
  initArchitectureVisualizer();

  // 3. Render Dynamic Content
  renderTimeline();
  renderCaseStudies('All');
  initFilterTabs();
  renderSkills();
  initNavScroll();
  initContactForm();
  initLiveClock();
  initScrollAnimations();
});

/* ==========================================================================
   RENDER TIMELINE (LINKEDIN 3-TIER DATA)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = careerTimeline.map((item) => {
    // Nested promotion tree for Sanskar Technolab
    let promotionsHtml = '';
    if (item.promotions && item.promotions.length > 0) {
      promotionsHtml = `
        <div class="promotions-accordion">
          <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--purple-secondary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">
            3-Stage Internal Career Progression:
          </div>
          ${item.promotions.map(p => `
            <div class="promo-step">
              <div class="promo-title-row">
                <span class="promo-title">${p.title}</span>
                <span class="promo-period">${p.period}</span>
              </div>
              <div class="promo-desc">${p.description}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-marker"></div>
        <div class="glass-card timeline-card">
          <div class="timeline-card-header">
            <div>
              <h3 class="timeline-company-title">${item.company}</h3>
              <div class="timeline-role">
                <span>${item.role}</span>
                <span class="badge ${getBadgeStyle(item.statusBadge)}">${item.statusBadge}</span>
              </div>
            </div>
            <div class="timeline-period-badge">${item.period} · ${item.duration}</div>
          </div>
          
          <div class="timeline-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${item.location}
          </div>

          <p class="timeline-summary">${item.summary}</p>

          ${promotionsHtml}

          <ul class="timeline-highlights">
            ${item.highlights.map(h => `<li>${formatHighlightText(h)}</li>`).join('')}
          </ul>

          <div class="timeline-skills-list">
            ${item.skills.map(s => `<span class="badge badge-cyan">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getBadgeStyle(badgeText) {
  if (badgeText.includes('Current')) return 'badge-emerald';
  if (badgeText.includes('Lead')) return 'badge-purple';
  return 'badge-amber';
}

function formatHighlightText(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffffff; font-weight: 600;">$1</strong>');
}

/* ==========================================================================
   RENDER CASE STUDIES & FILTER TABS
   ========================================================================== */
function renderCaseStudies(filterCategory = 'All') {
  const grid = document.getElementById('caseStudiesGrid');
  if (!grid) return;

  const filtered = filterCategory === 'All' 
    ? enterpriseCaseStudies 
    : enterpriseCaseStudies.filter(p => p.category === filterCategory);

  grid.innerHTML = filtered.map(project => `
    <div class="glass-card project-card" data-project-id="${project.id}" id="projectCard_${project.id}">
      <div>
        <div class="project-top-meta">
          <span class="badge badge-purple">${project.category}</span>
          <span class="project-client-badge">${project.client}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-challenge-snippet">${project.challenge.substring(0, 130)}...</p>
      </div>

      <div class="project-footer-meta">
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${project.tags.slice(0, 3).map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
        </div>
        <span class="project-view-cta">
          Case Study 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </div>
  `).join('');

  // Attach click listeners to cards
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      const project = enterpriseCaseStudies.find(p => p.id === pId);
      if (project) openProjectModal(project);
    });
  });
}

function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCaseStudies(btn.getAttribute('data-category'));
    });
  });
}

/* ==========================================================================
   CASE STUDY MODAL DEEP DIVE
   ========================================================================== */
function openProjectModal(project) {
  const overlay = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalContent = document.getElementById('modalContent');

  if (!overlay || !modalTitle || !modalContent) return;

  modalTitle.textContent = project.title;
  modalSubtitle.textContent = `${project.client} · ${project.duration} · ${project.category}`;

  modalContent.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="color: var(--cyan-primary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
          Business Challenge
        </h4>
        <p style="color: #cbd5e1; line-height: 1.6;">${project.challenge}</p>
      </div>

      <div>
        <h4 style="color: var(--cyan-primary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
          Technical Solution
        </h4>
        <p style="color: #cbd5e1; line-height: 1.6;">${project.solution}</p>
      </div>

      <div>
        <h4 style="color: var(--purple-secondary); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 8px;">
          System Architecture Pipeline
        </h4>
        <div style="background: rgba(10, 15, 29, 0.9); border: 1px dashed rgba(121, 40, 202, 0.4); border-radius: var(--radius-sm); padding: 14px 18px; font-family: var(--font-mono); font-size: 0.85rem; color: #a78bfa; word-break: break-word;">
          ${project.architecture}
        </div>
      </div>

      <div>
        <h4 style="color: var(--emerald-accent); font-size: 0.95rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 12px;">
          Measurable Outcomes & Impact
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${project.impact.map(item => `
            <li style="position: relative; padding-left: 20px; font-size: 0.9rem; color: #f1f5f9;">
              <span style="position: absolute; left: 0; color: var(--emerald-accent);">✓</span>
              ${item}
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
        ${project.tags.map(t => `<span class="badge badge-cyan">${t}</span>`).join('')}
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeProjectModal = function() {
  const overlay = document.getElementById('projectModal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   RENDER SKILLS MATRIX
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skillsData.categories.map(cat => `
    <div class="glass-card skill-category-card reveal-on-scroll">
      <div class="category-header">
        <div class="category-icon">
          ${getCategoryIcon(cat.icon)}
        </div>
        <h3 class="category-title">${cat.title}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <div class="skill-label-row">
              <span class="skill-name">${s.name} ${s.highlight ? '<span style="color: var(--cyan-primary);">★</span>' : ''}</span>
              <span class="skill-percent">${s.level}%</span>
            </div>
            <div class="skill-track">
              <div class="skill-bar" data-width="${s.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate skill bars on scroll — with stagger per bar
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar');
        bars.forEach((bar, idx) => {
          setTimeout(() => {
            bar.style.width = bar.getAttribute('data-width');
            // Show the leading spark after bar finishes
            bar.classList.add('bar-revealed');
          }, idx * 120);
        });
        // Mark card for spark visibility
        entry.target.classList.add('bars-revealed');
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  grid.querySelectorAll('.skill-category-card').forEach(card => skillObserver.observe(card));
}

function getCategoryIcon(type) {
  switch (type) {
    case 'layers':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
    case 'code':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    case 'network':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
    case 'database':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}

/* ==========================================================================
   NAVIGATION & SCROLL HANDLER
   ========================================================================== */
function initNavScroll() {
  const navbar = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active anchor update
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

/* ==========================================================================
   CONTACT FORM & TOAST UTILITY
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.');
      return;
    }

    // Launch default email client via mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    showToast('🚀 Opening your email client to send message to Hardik...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

export function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

window.copyToClipboard = function(text, label) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`✓ Copied ${label} to clipboard: ${text}`);
    });
  } else {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    showToast(`✓ Copied ${label} to clipboard: ${text}`);
  }
};

/* ==========================================================================
   LIVE CLOCK (AKHODAD / GUJARAT, INDIA - IST UTC+5:30)
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('localClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeStr = now.toLocaleTimeString('en-US', options);
    clockEl.textContent = `${timeStr} IST (Gujarat, India)`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS — with stagger and stat counter
   ========================================================================== */
function initScrollAnimations() {
  // ── Staggered reveal for .reveal-on-scroll elements ──
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger siblings inside the same section by 80ms increments
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('.reveal-on-scroll'));
          const idx = siblings.indexOf(entry.target);
          if (idx >= 0) {
            entry.target.style.transitionDelay = `${idx * 80}ms`;
          }
        }
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  // ── Stat counter animation ──
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const valueEl = entry.target;
        const text = valueEl.textContent.trim();
        const numMatch = text.match(/(\d+(\.\d+)?)/);
        if (!numMatch) return;
        const target = parseFloat(numMatch[1]);
        const suffix = text.replace(numMatch[0], '').replace(/\s+/, '');
        const prefix = text.substring(0, text.indexOf(numMatch[0]));
        const isDecimal = text.includes('.');
        const duration = 1600;
        const startTime = performance.now();

        // Find the suffix span if it exists (keep it)
        const suffixSpan = valueEl.querySelector('.stat-suffix');
        const suffixHTML = suffixSpan ? suffixSpan.outerHTML : '';

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = isDecimal
            ? (eased * target).toFixed(1)
            : Math.round(eased * target);

          valueEl.innerHTML = `${prefix}${current}${suffixHTML}`;

          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        statObserver.unobserve(valueEl);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.stat-value').forEach(el => statObserver.observe(el));

  // ── Cursor glow follower ──
  initCursorGlow();
}

/* ==========================================================================
   CURSOR GLOW FOLLOWER
   ========================================================================== */
function initCursorGlow() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX  = currentX;
  let targetY  = currentY;
  let rafId    = null;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animateGlow() {
    // Lag: lerp toward target with ~100ms delay feel
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    glow.style.left = `${currentX}px`;
    glow.style.top  = `${currentY}px`;

    rafId = requestAnimationFrame(animateGlow);
  }

  rafId = requestAnimationFrame(animateGlow);
}

window.toggleResumePreview = function(show) {
  if (show) {
    document.body.classList.add('print-preview-mode');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.body.classList.remove('print-preview-mode');
  }
};
