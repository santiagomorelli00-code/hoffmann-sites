/* Ein gemeinsamer Datenbestand: Neue Meldungen erscheinen automatisch auf
   der Startseite (die drei neuesten) und vollständig im Archiv. */
(function () {
  'use strict';
  const posts = (window.HOFFMANN_NEWS || []).slice().sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const date = value => value.split('-').reverse().join('.');
  const meta = p => `<p class="news-meta">${escape(p.category)} · <time datetime="${escape(p.date)}">${date(p.date)}</time></p>`;
  const preview = document.querySelector('[data-news-preview]');
  if (preview && posts.length) preview.innerHTML = posts.filter(p => p.category === 'Aktuelles').slice(0, 3).map(p => `<article class="news-card">${meta(p)}<h3><a href="aktuelles.html#beitrag-${p.id}">${escape(p.title)}</a></h3><p>${escape(p.excerpt)}</p><a class="practice-card__link" href="aktuelles.html#beitrag-${p.id}">Weiterlesen →</a></article>`).join('');
  const archive = document.querySelector('[data-news-archive]');
  if (!archive) return;
  // body enthält ausschließlich vertrauenswürdiges, bei der Übernahme bereinigtes Kanzlei-HTML.
  archive.innerHTML = posts.map(p => `<article class="news-entry" id="beitrag-${p.id}" data-category="${escape(p.category)}">${meta(p)}<h2>${escape(p.title)}</h2><div class="news-body">${p.body}</div></article>`).join('');
  const count = document.querySelector('.news-count');
  function filter(category) {
    let visible = 0;
    archive.querySelectorAll('.news-entry').forEach(entry => {
      entry.hidden = category !== 'Alle' && entry.dataset.category !== category;
      if (!entry.hidden) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'Beitrag' : 'Beiträge'}`;
    document.querySelectorAll('[data-news-filter]').forEach(button => {
      const active = button.dataset.newsFilter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  document.querySelectorAll('[data-news-filter]').forEach(button => button.addEventListener('click', () => filter(button.dataset.newsFilter)));
  function openLinkedPost() {
    if (!/^#beitrag-\d+$/.test(location.hash)) return;
    const entry = document.getElementById(location.hash.slice(1));
    if (entry) { filter('Alle'); requestAnimationFrame(() => entry.scrollIntoView()); }
  }
  filter('Alle'); openLinkedPost(); window.addEventListener('hashchange', openLinkedPost);
})();
