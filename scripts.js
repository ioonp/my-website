/* ============================================================
   ioniapara.com — shared scripts
   Requires data.js to be loaded first.
   ============================================================ */

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */
function tag(type) {
  return `<span class="tag tag-${type}">${type === 'side' ? 'side project' : type}</span>`;
}

function logTitleHtml(entry) {
  if (!entry.link) return entry.title;
  // if only part of the title should be linked, replace that part
  if (entry.linkedPart) {
    return entry.title.replace(
      entry.linkedPart,
      `<a href="${entry.link}" target="_blank" rel="noopener">${entry.linkedPart}</a>`
    );
  }
  // otherwise link the whole title
  return `<a href="${entry.link}" target="_blank" rel="noopener">${entry.title}</a>`;
}

function projectNameHtml(project) {
  if (!project.link) return project.name;
  return `<a href="${project.link}" target="_blank" rel="noopener">${project.name}</a>`;
}

/* ------------------------------------------------------------
   Log page — full list + filters
   ------------------------------------------------------------ */
function renderLogPage() {
  const list = document.getElementById('log-list');
  if (!list) return;

  list.innerHTML = SITE.log.map(entry => {
    const tagsHtml = entry.tags.map(t => tag(t)).join(' ');
    const descHtml = entry.desc ? `<span class="log-desc">${entry.desc}</span>` : '';
    const trackHtml = entry.track
      ? `<button class="log-track" data-track-filter="${entry.track}">${entry.track}</button>`
      : '';

    return `
      <article class="log-entry" data-tags="${entry.tags.join(' ')}" data-track="${entry.track || ''}">
        <span class="log-date">
          ${entry.date}
          ${trackHtml}
        </span>
        <div class="log-body">
          <span class="log-title">${logTitleHtml(entry)}${tagsHtml ? ' ' + tagsHtml : ''}</span>
          ${descHtml}
        </div>
      </article>`;
  }).join('');

  initLogFilters();
}

function initLogFilters() {
  const tagButtons = document.querySelectorAll('.filter-btn');
  const empty      = document.getElementById('log-empty');
  let activeTag    = 'all';
  let activeTrack  = null;

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll('.log-entry').forEach(entry => {
      const tags  = (entry.dataset.tags  || '').split(' ');
      const track = entry.dataset.track  || '';

      const tagMatch   = activeTag   === 'all' || tags.includes(activeTag);
      const trackMatch = !activeTrack || track === activeTrack;
      const show = tagMatch && trackMatch;

      entry.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible > 0;

    // sync track label active states
    document.querySelectorAll('.log-track').forEach(btn => {
      btn.classList.toggle('track-active', btn.dataset.trackFilter === activeTrack);
    });
  }

  // top-bar tag filters
  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag   = btn.dataset.filter;
      activeTrack = null;                     // clear track filter
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  // track label filters (delegated — labels are rendered after this runs)
  document.getElementById('log-list').addEventListener('click', e => {
    const btn = e.target.closest('.log-track');
    if (!btn) return;
    const clicked = btn.dataset.trackFilter;
    if (activeTrack === clicked) {
      // toggle off
      activeTrack = null;
    } else {
      activeTrack = clicked;
      // reset tag filter to 'all'
      activeTag = 'all';
      tagButtons.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    }
    applyFilters();
  });
}

/* ------------------------------------------------------------
   Projects page — full cards
   ------------------------------------------------------------ */
function renderProjectsPage() {
  const list = document.querySelector('.project-list');
  if (!list) return;

  list.innerHTML = SITE.projects.map(p => `
    <article class="project-card">
      <div class="project-meta">
        <span class="tag tag-start">start</span>
        <span class="project-type muted">${p.type}</span>
        <span class="project-date muted">${p.year}</span>
        <span class="project-status-pill status-${p.statusKey}">${p.status}</span>
      </div>
      <h2 class="project-title">${projectNameHtml(p)}</h2>
      <p class="project-desc">${p.desc}</p>
      <div class="project-footer">
        <span class="project-impact muted">${p.impact}</span>
      </div>
    </article>`
  ).join('');
}

/* ------------------------------------------------------------
   Writing page — full list
   ------------------------------------------------------------ */
function renderWritingPage() {
  const list = document.querySelector('.writing-list');
  if (!list) return;

  list.innerHTML = SITE.writing.map(w => `
    <article class="writing-entry">
      <div class="writing-meta">
        <span class="writing-date muted">${w.date}</span>
        <span class="writing-platform muted">medium</span>
      </div>
      <h2 class="writing-title">
        <a href="${w.link}" target="_blank" rel="noopener">${w.title}</a>
      </h2>
      <p class="writing-desc">${w.desc}</p>
    </article>`
  ).join('');
}

/* ------------------------------------------------------------
   Homepage — condensed sections
   ------------------------------------------------------------ */
function renderHomePage() {
  // recent log — first 4 entries
  const logEl = document.getElementById('home-log');
  if (logEl) {
    logEl.innerHTML = SITE.log.slice(0, 4).map(entry => {
      const tagsHtml = entry.tags.map(t => tag(t)).join(' ');
      const descHtml = entry.desc ? `<span class="log-desc">${entry.desc}</span>` : '';
      return `
        <div class="log-entry">
          <span class="log-date">${entry.date}</span>
          <div class="log-body">
            <span class="log-title">${logTitleHtml(entry)}${tagsHtml ? ' ' + tagsHtml : ''}</span>
            ${descHtml}
          </div>
        </div>`;
    }).join('');
  }

  // projects — exclude entries with homeDesc: null, max 3
  const projEl = document.getElementById('home-projects');
  if (projEl) {
    const homeProjects = SITE.projects.filter(p => p.homeDesc !== null).slice(0, 3);
    projEl.innerHTML = homeProjects.map(p => `
      <li>
        <span class="item-title">${projectNameHtml(p)}</span>
        <span class="muted">${p.homeDesc}</span>
      </li>`
    ).join('');
  }

  // writing — first 3 entries
  const writeEl = document.getElementById('home-writing');
  if (writeEl) {
    writeEl.innerHTML = SITE.writing.slice(0, 3).map(w => `
      <li>
        <span class="item-title">
          <a href="${w.link}" target="_blank" rel="noopener">${w.title}</a>
        </span>
        <span class="muted">${w.date}</span>
      </li>`
    ).join('');
  }
}

/* ------------------------------------------------------------
   Auto-detect page and render
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('log-list'))          renderLogPage();
  if (document.querySelector('.project-list'))      renderProjectsPage();
  if (document.querySelector('.writing-list'))      renderWritingPage();
  if (document.getElementById('home-log'))          renderHomePage();
  initCopyButtons();
});

/* ------------------------------------------------------------
   Footer copy buttons
   ------------------------------------------------------------ */
function initCopyButtons() {
  const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M10.5 1.5A1.5 1.5 0 0 1 12 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 2 2h1.5A1.5 1.5 0 0 1 5 .5h4A1.5 1.5 0 0 1 10.5 1.5ZM5 2a.5.5 0 0 0-.5.5v7A.5.5 0 0 0 5 10h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 10 2H5Zm6.5 3V3a.5.5 0 0 0-.5-.5H5.5v-.001H10A.5.5 0 0 1 10.5 3v1H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h5.5A1.5 1.5 0 0 0 11 9.5V5Z"/>
  </svg>`;

  document.querySelectorAll('footer .footer-links li').forEach(li => {
    const anchor = li.querySelector('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href') || '';
    const valueToCopy = href.startsWith('mailto:')
      ? href.replace('mailto:', '')
      : href;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'copy to clipboard');
    btn.innerHTML = COPY_ICON;

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(valueToCopy);
        btn.setAttribute('data-copied', '');
        setTimeout(() => btn.removeAttribute('data-copied'), 1800);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = valueToCopy;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.setAttribute('data-copied', '');
        setTimeout(() => btn.removeAttribute('data-copied'), 1800);
      }
    });

    li.appendChild(btn);
  });
}
