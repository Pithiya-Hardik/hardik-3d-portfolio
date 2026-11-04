/**
 * architecture-flow.js
 * Interactive ERPNext & Frappe Full-Stack Architecture Visualizer
 */

import { architectureNodes } from './portfolio-data.js';

export function initArchitectureVisualizer() {
  const pipelineContainer = document.getElementById('archPipeline');
  const detailPanel = document.getElementById('archDetailPanel');

  if (!pipelineContainer || !detailPanel) return;

  // Render Pipeline Nodes
  pipelineContainer.innerHTML = architectureNodes.map((node, index) => `
    <div class="arch-node ${index === 0 ? 'active' : ''}" data-node-id="${node.id}" id="archNode_${node.id}">
      <div class="arch-node-icon">
        ${getNodeIcon(node.icon)}
      </div>
      <div class="arch-node-label">${node.label}</div>
      <div class="arch-node-tech">${node.tech}</div>
    </div>
  `).join('');

  // Initial Details Display
  updateDetailPanel(architectureNodes[0]);

  // Click & Hover Listeners
  pipelineContainer.querySelectorAll('.arch-node').forEach((el) => {
    el.addEventListener('click', () => {
      const nodeId = el.getAttribute('data-node-id');
      const nodeData = architectureNodes.find(n => n.id === nodeId);
      if (nodeData) {
        pipelineContainer.querySelectorAll('.arch-node').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
        updateDetailPanel(nodeData);
      }
    });
  });

  function updateDetailPanel(node) {
    detailPanel.innerHTML = `
      <div style="flex: 1;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <span class="badge badge-cyan">${node.label}</span>
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">${node.tech}</span>
        </div>
        <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 12px;">${node.desc}</p>
        <div style="font-family: var(--font-mono); font-size: 0.775rem; color: var(--cyan-primary); background: rgba(0,242,254,0.06); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px dashed rgba(0,242,254,0.25);">
          ${getArchitectureInsight(node.id)}
        </div>
      </div>
    `;
  }

  function getArchitectureInsight(id) {
    switch (id) {
      case 'client-layer':
        return 'Production Insight: Configured real-time custom HTML blocks inside Minix Desk and Vue-powered interfaces for Frappe LMS.';
      case 'api-layer':
        return 'Production Insight: Built secure REST endpoints with OAuth2 authentication and Zoom Webhook verification for ChatOps.';
      case 'app-layer':
        return 'Production Insight: Architected Meril Exim buying controllers and automated landed cost calculation in Python DocType hooks.';
      case 'queue-layer':
        return 'Production Insight: Offloaded heavy report calculations, PDF generation, and automated reminder emails to background Redis/RQ jobs.';
      case 'data-layer':
        return 'Production Insight: Tuned high-throughput MariaDB tables for asset allocation tracking and batch-wise finished goods traceability.';
      default:
        return 'Scalable enterprise architecture built on Frappe and Python.';
    }
  }

  function getNodeIcon(iconType) {
    switch (iconType) {
      case 'monitor':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
      case 'shield':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
      case 'cpu':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
      case 'refresh':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`;
      case 'database':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }
}
