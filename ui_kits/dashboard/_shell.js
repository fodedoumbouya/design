/* Ekklo screens - shared sidebar+topbar JS to avoid duplication */
(function () {
  // Bell mascot SVG (inline so screens don't need separate asset)
  window.__BELL_SVG = function (size) {
    size = size || 72;
    return `
      <svg viewBox="0 0 120 120" width="${size}" height="${size}">
        <circle cx="60" cy="68" r="36" fill="#1ED77A"/>
        <path d="M42 38 Q60 26 78 38 L76 48 L44 48 Z" fill="#0C5C32"/>
        <rect x="52" y="34" width="16" height="8" rx="2" fill="#1A1A1A"/>
        <circle cx="50" cy="64" r="3.5" fill="#1A1A1A"/>
        <circle cx="70" cy="64" r="3.5" fill="#1A1A1A"/>
        <path d="M52 78 Q60 84 68 78" stroke="#1A1A1A" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="48" cy="104" rx="9" ry="4" fill="#0C5C32"/>
        <ellipse cx="72" cy="104" rx="9" ry="4" fill="#0C5C32"/>
      </svg>`;
  };

  // Logo glyph
  window.__LOGO_SVG = `
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <path d="M16 4 C9 4 4 9 4 16 C4 23 9 28 16 28 C23 28 28 23 28 16 C28 12 26 9 23 7 L20 12 C22 13 23 14 23 16 C23 19 20 22 16 22 C12 22 9 19 9 16 C9 13 12 10 16 10 C17 10 18 10 19 11 L22 6 C20 5 18 4 16 4 Z" fill="#D8F11A" stroke="#1A1A1A" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="22" cy="9" r="2.5" fill="#1A1A1A"/>
    </svg>`;

  // Stroke icon set
  const I = (path) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  window.__ICONS = {
    dashboard: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
    clients: I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'),
    prospects: I('<circle cx="9" cy="7" r="4"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M19 8v6M16 11h6"/>'),
    calendar: I('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    fitness: I('<path d="M6 4v16M18 4v16M6 12h12M2 9v6M22 9v6"/>'),
    nutrition: I('<path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M5 12a7 7 0 0 0 14 0"/><path d="M12 19v3"/>'),
    tracking: I('<rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/>'),
    videos: I('<circle cx="12" cy="12" r="9"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>'),
    accounting: I('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><line x1="6" y1="12" x2="6" y2="12.01"/><line x1="18" y1="12" x2="18" y2="12.01"/>'),
    teams: I('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    drive: I('<path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>'),
    automation: I('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17h7M17 14v7"/>'),
    notifications: I('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>'),
    profile: I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'),
    application: I('<rect x="6" y="2" width="12" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>'),
  };

  window.__renderShell = function (activeKey, crumb, opts) {
    opts = opts || {};
    const item = (key, label, href, tag) => `
      <a href="${href}" class="${activeKey === key ? 'active' : ''}">
        ${window.__ICONS[key] || ''}
        <span class="grow">${label}</span>
        ${tag ? `<span class="tag">${tag}</span>` : ''}
      </a>`;

    return `
      <aside class="side">
        <div class="brand">
          <span class="mark">${window.__LOGO_SVG}</span>
          Ekklo
          <span class="caret">▾</span>
        </div>
        <nav class="nav">
          ${item('dashboard', 'Dashboard', 'index.html')}
          ${item('clients', 'Clients', 'clients.html')}
          ${item('prospects', 'Prospects', 'prospects.html', 'New')}
          ${item('calendar', 'Calendar', 'calendar.html')}
          <span class="group-label">Resources</span>
          ${item('fitness', 'Fitness', 'fitness.html')}
          ${item('nutrition', 'Nutrition', 'nutrition.html')}
          ${item('tracking', 'Tracking', 'tracking.html')}
          ${item('videos', 'Videos', 'videos.html')}
          <span class="group-label">Management</span>
          ${item('accounting', 'Accounting', 'accounting.html')}
          ${item('teams', 'Teams', 'teams.html')}
          ${item('drive', 'Drive', 'drive.html')}
          ${item('automation', 'Automation', 'automation.html', 'V2')}
          ${item('notifications', 'Notifications', 'notifications.html')}
          <span class="group-label">Profile</span>
          <a href="#"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg><span class="grow">Public Profile</span></a>
          <a href="#"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg><span class="grow">Application</span></a>
        </nav>
        <div class="gs">
          <h4>Getting Started 🚀</h4>
          <p>Set up your business and welcome your first clients.</p>
          <button>Let's go</button>
        </div>
        <div class="me">
          <span class="av">F</span>
          <span>Fode Doumbouya</span>
          <span style="margin-left:auto; color: var(--text-tertiary);">▾</span>
        </div>
      </aside>`;
  };

  window.__renderTopbar = function (crumb, opts) {
    opts = opts || {};
    const tutorial = opts.tutorial ? '<a>📺 Video tutorial</a>' : '';
    return `
      <div class="topbar">
        <span class="seg-icon" style="color: var(--text-tertiary);">▭</span>
        <span class="crumb">${crumb}</span>
        <div class="center">
          <span style="color: var(--text-secondary); font-weight: 400;">You have 9 free trial days remaining</span>
          <button>Upgrade plan</button>
        </div>
        <div class="right">
          ${tutorial}
          <a>↺ Replay the guide</a>
          <span>🔍</span>
          <span style="display: inline-flex; align-items: center; gap: 4px;">💬 <span class="badge">1</span></span>
          <span>💬</span>
          <span>🔔</span>
        </div>
      </div>`;
  };

  window.__mountShell = function (key, crumb, opts) {
    document.getElementById('shell-side').innerHTML = window.__renderShell(key);
    document.getElementById('shell-top').innerHTML = window.__renderTopbar(crumb, opts);
  };
})();
