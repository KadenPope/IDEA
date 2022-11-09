const fadeIn = $this => {
  $('.substrate-img').attr('src', $this.attr('src'));
  
  $(".substrate").fadeIn(300).promise().done(function() {
      $(".substrate").attr('aria-hidden', false);
  })
}

const fadeOut = () => {
  $(".substrate").fadeOut(300).promise().done(function() {
      $(".substrate").attr('aria-hidden', true);
  });
}

$(document).ready(function () {
  $("body .photography #photos img").click(function(e) {
      fadeIn($(this));
  });
  $(".substrate-bg,.substrate-img").click(function() {
      fadeOut();
  });

  $("body .photography #photos img").keypress(function(e) {
      const key = e.which;
      if (key === 13 && $('.substrate[aria-hidden="true"]').length) {
          fadeIn($(this))
      }
      else if (key === 13) {
          fadeOut();
      }
  });
});

