/* ============================================================
   ioniapara.com — shared scripts
   ============================================================ */

/* ------------------------------------------------------------
   Footer copy buttons
   ------------------------------------------------------------ */
(function () {
  const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M10.5 1.5A1.5 1.5 0 0 1 12 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 2 2h1.5A1.5 1.5 0 0 1 5 .5h4A1.5 1.5 0 0 1 10.5 1.5ZM5 2a.5.5 0 0 0-.5.5v7A.5.5 0 0 0 5 10h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 10 2H5Zm6.5 3V3a.5.5 0 0 0-.5-.5H5.5v-.001H10A.5.5 0 0 1 10.5 3v1H12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h5.5A1.5 1.5 0 0 0 11 9.5V5Z"/>
  </svg>`;

  document.querySelectorAll('footer .footer-links li').forEach(li => {
    const anchor = li.querySelector('a');
    if (!anchor) return;

    // determine what to copy — email address for mailto, URL otherwise
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
        // fallback for older browsers
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
}());
