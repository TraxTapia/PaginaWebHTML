$(document).ready(function () {
  var $rows1 = $(".ipc");
  var $rows2 = $(
    ".elemento__image_left_h1, .elemento__image_left_p, .elemento__image_right_h1, .elemento__image_right_p, .elemento__image_center_textarea, .elemento__boton_center"
  );

  setTimeout(function () {
    $rows1.removeClass("oymc");
    $rows1.addClass("mc");

    $rows2.removeClass(
      ".elemento__image_left_h1 .elemento__image_left_p .elemento__image_right_h1 .elemento__image_right_p .elemento__image_center_textarea .elemento__boton_center"
    );
    $rows2.addClass("pnbg");
  }, 4400);
});
