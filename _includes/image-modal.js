/**
 * Opens full-size images in a modal instead of sending the reader off to a bare
 * image in another tab. Posts already link their thumbnails to the originals
 * with plain anchors, so this listens once on the document and leaves the post
 * markup alone.
 *
 * Anchors that wrap an image but point at something else — a demo page, an
 * external site — keep their normal behaviour, as do modified clicks and
 * browsers without <dialog>.
 *
 * Note: this file is inlined through {% raw %}{% include %}{% endraw %}, so
 * Liquid parses it. Keep Liquid delimiters out of it.
 */
(function () {
  var FULL_SIZE_IMAGE = /\.(png|jpe?g|gif|webp|svg)$/i;

  var dialog = null;
  var image = null;
  var closeButton = null;

  if (!window.HTMLDialogElement || !HTMLDialogElement.prototype.showModal) {
    return;
  }

  function build() {
    dialog = document.createElement('dialog');
    dialog.className = 'image-modal';

    closeButton = document.createElement('button');
    closeButton.className = 'image-modal__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.innerHTML = '<svg class="image-modal__cross" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>';

    image = document.createElement('img');
    image.className = 'image-modal__image';

    // First in the DOM so the modal opens with the way out already focused.
    dialog.appendChild(closeButton);
    dialog.appendChild(image);
    document.body.appendChild(dialog);

    closeButton.addEventListener('click', function () {
      dialog.close();
    });

    // The dialog box shrink-wraps the image, so anything reported against the
    // dialog itself was a click on the backdrop around it.
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    // Dropping the source releases the decoded image and stops the previous one
    // showing for a frame while the next arrives.
    dialog.addEventListener('close', function () {
      image.removeAttribute('src');
    });
  }

  document.addEventListener('click', function (event) {
    // Leave "open in a new tab" and friends to the browser.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    var anchor = event.target.closest('a');

    if (!anchor || !anchor.querySelector('img')) {
      return;
    }

    if (!FULL_SIZE_IMAGE.test(anchor.pathname)) {
      return;
    }

    event.preventDefault();

    if (!dialog) {
      build();
    }

    var thumbnail = anchor.querySelector('img');

    image.src = anchor.href;
    image.alt = thumbnail.getAttribute('alt') || thumbnail.getAttribute('title') || '';

    dialog.showModal();
    closeButton.focus();
  });
})();
