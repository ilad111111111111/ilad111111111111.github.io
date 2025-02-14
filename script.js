$(document).ready(function() {
    $('#title2').hide();
    $('#msg').hide();
    $("#btn").click(function() {
      console.log('triggered');
      $(".img-slideshow").attr("src", "images/cat-05.gif");
      $(this).hide();
      $('#title2').show();
      $('#title1').hide();
      $('#msg').show();
      var images = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"];
      var currentIndex = 0;
  
      function changeImage() {
        console.log('currentimage:', images[currentIndex]);
        console.log('currentIndex:', currentIndex);
        $(".img-slideshow").attr("src", "images/" + images[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
      }
  
      setInterval(changeImage, 5000);
    });
  });