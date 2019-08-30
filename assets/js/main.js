(function($) {
  $(function() {
    setTimeout(function () {
      if (window.location.hash) {
        var el = document.getElementById(window.location.hash.slice(1));
        if (el) {
          scrollTo(el);
        }
      }
    }, 250);

    var headings = $('h1, h2, h3, h4');

    $.each(headings, function (i, el) {
      if (!el.id) {
        // Hyphen-case the innerText if id is missing
        el.id = el.innerText.replace(/\s+/g, '-').toLowerCase();

        // Remove quote chars from id string
        el.id = el.id.replace(/['"]/g, '')
      }
    })

    headings.css('cursor', 'pointer');

    headings.click(function () {
      window.location.href = '#' + this.id;
      var el = document.querySelector(window.location.hash);
      if (el) {
        scrollTo(el);
      }
    })

    function scrollTo (el) {
      if (window.innerWidth < 840) {
        // 60px less so element isn't hidden by mobile navPanel
        $('html, body').scrollTop($(el).offset().top - 60);
      } else {
        $('html, body').scrollTop($(el).offset().top);
      }
    }
  })
})(jQuery);
