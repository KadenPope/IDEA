$(document).ready(function () {
  //This is the part that is working with the click/tap functionality :)
    $("body .photography #photos img").click(function () {
        var img = $(this);
        var src = img.attr('src');
      $("body .photography").append("<div class='substrate'>" +
        "<div class='substrate-bg'></div>" +
        "<img src=" + src + " class='substrate-img' />" +
        "</div>");
      $(".substrate").fadeIn(300);
      $(".substrate-bg,.substrate-img").click(function () {
        $(".substrate").fadeOut(300);
        document.getElementById("photos").style.display = "block";
        setTimeout(function () {
          $(".substrate").remove();
        }, 300);
      });
    });

    //Below is the part that is hurting my brain - I think that it is leaving the function before it waits for the second keypress, making it just get darker when you click enter again (because it goes back to the start) 
    $("body .photography #photos img").keypress(function (e) {
      var key = e.which;
      if(key == 13) {
        var img = $(this);
        var src = img.attr('src');
        $("body .photography").append("<div class='substrate'>" +
          "<div class='substrate-bg'></div>" +
          "<img src=" + src + " class='substrate-img' />" +
          "</div>");
        $(".substrate").fadeIn(300);
        (".substrate-bg,.substrate-img").addEventListener.keypress(function (e) {
          var keystroke = e.which; 
          if (keystroke == 13) {
            $(".substrate").fadeOut(300);
            document.getElementById("photos").style.display = "block";
            setTimeout(function () {
              $(".substrate").remove();
            }, 300);
          }
        });
      }    
    });
  });
    
  //   $("body .photography #photos img").click(function () {
  //     var img = $(this);
  //     var src = img.attr('src');
  //   $("body .photography").append("<div class='substrate'>" +
  //     "<div class='substrate-bg'></div>" +
  //     "<img src=" + src + " class='substrate-img' />" +
  //     "</div>");
  //   $(".substrate").fadeIn(300);
  //   $(".substrate-bg,.substrate-img").click(function () {
  //     $(".substrate").fadeOut(300);
  //     document.getElementById("photos").style.display = "block";
  //     setTimeout(function () {
  //       $(".substrate").remove();
  //     }, 300);
  //   });
  // });

  