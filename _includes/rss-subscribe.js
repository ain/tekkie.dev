/**
 * Progressive enhancement for the "subscribe via RSS" link: reveals a panel with
 * the feed URL and reader hand-off instead of navigating straight to raw XML.
 * Without this script the link keeps its original behaviour.
 *
 * Note: this file is inlined through {% raw %}{% include %}{% endraw %}, so Liquid
 * parses it. Keep Liquid delimiters out of it — the feed URL arrives on a data
 * attribute rather than being templated in.
 */
(function () {
  var panel = document.getElementById('rss-subscribe-panel');

  if (!panel) {
    return;
  }

  var trigger = document.querySelector('.rss-subscribe__trigger');
  var copyButton = panel.querySelector('.rss-subscribe__copy');
  var status = panel.querySelector('.rss-subscribe__status');
  var urlElement = panel.querySelector('.rss-subscribe__url');
  var feedUrl = panel.getAttribute('data-feed-url');
  var revertTimeout = null;

  function setOpen(open) {
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  // Fallback for browsers without the async clipboard API: select the URL so the
  // reader is one keystroke away from copying it themselves.
  function selectFeedUrl() {
    var selection = window.getSelection();
    var range = document.createRange();

    range.selectNodeContents(urlElement);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    setOpen(panel.hidden);
  });

  copyButton.addEventListener('click', function () {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(feedUrl).catch(selectFeedUrl);
    } else {
      selectFeedUrl();
    }

    copyButton.textContent = 'Copied';
    status.textContent = 'Copied';

    window.clearTimeout(revertTimeout);
    revertTimeout = window.setTimeout(function () {
      copyButton.textContent = 'Copy';
      status.textContent = '';
    }, 1600);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      trigger.focus();
    }
  });
})();
