$(".login-btn").click(function () {
  $(".pop_up").toggleClass("hidden");
});
$(".close").click(function () {
  $(".pop_up").toggleClass("hidden");
});
$(".header-bars").click(function () {
  $(".menu").toggleClass("visible");
  $(".header-nav").css("align-items", "flex-start");
  $(".header-bars").toggleClass("fa-bars").addClass("fa-angle-up");
  if ($(".fa-bars").is(":visible")) {
    $(".header-nav").css("align-items", "center");
    $(".fa-bars").removeClass("yee");
  } else {
    $(".fa-angle-up").addClass("yee");
  }
});
