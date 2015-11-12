// Helper methods
window.Helper = {};

// Initialize operations on
// non-ajax document content
Helper.init = function() {
    this.emojifyAll();
    this.highlightAll();
    this.updateCover();
};

// Copy Prism method references to helper
Helper.highlightElement = Prism.highlightElement;
Helper.highlightAll     = Prism.highlightAll;

// Update cover image
Helper.updateCover = function() {

    var $image = $('img.post-featured-image');

    $('.site-header').each(function() {
      var $this  = $(this),
          cover  = $image.attr('src') || $this.data('cover');

      if (cover != this.lastCover && /\/$/.test(cover)) {

          this.lastCover = cover;
          $this.css('background-image', 'url(' + cover + ')');
      }
    });
};

// Emojify string
Helper.emojifyString = function(str, size) {
    size = size || 50;
    return window.emoji(str, '/assets/images/emojis', 30);
};

// Emojify document
Helper.emojifyAll = function(size) {
    var elements = document.body.children;
		for (var i=0, element; element = elements[i++];) {
			this.emojifyElement(element, size);
		}
};

// Emojify element
Helper.emojifyElement = function(elem, size) {
  elem.innerHTML = this.emojifyString(elem.innerHTML, size);
};
