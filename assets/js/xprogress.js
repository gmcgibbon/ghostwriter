// NProgress extensions
window.XProgress = {};

// Initialize Progress extensions
XProgress.init = function() {
    this.updateCover();
    this.updateCoverTimeout = 600;
};

// Start progress bar
XProgress.start = function() {
  NProgress.start();
};

// Stop progress bar
XProgress.done = function() {

  Prism.highlightAll();
  NProgress.done(); // Complete progress bar
  setTimeout(this.updateCover, this.updateCoverTimeout);
};

// Update cover image
XProgress.updateCover = function() {

    var $image = $('img.post-featured-image');

    $('.site-header').each(function() {
      var $this  = $(this),
          cover  = $image.attr('src') || $this.data('cover');

      if (XProgress.lastCover != cover) {

          XProgress.lastCover = cover;
          $this.css('background-image', 'url(' + cover + ')');
      }
    });
};

XProgress.init();
