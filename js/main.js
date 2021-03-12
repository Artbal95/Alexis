let loading = false
$(document).ready(function(){
    loading = true
    if(loading){
        setTimeout(function(){ 
            $('#loading').hide(0)
            $('.wrapper').show(0); 
        }, 2000);
    }
    scrolling()
    navShow()
    modaVideo()
  });

//   Scroll Function With Hash
  function scrolling (){
    // Add smooth scrolling to all links
    $(".nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            

            // Store hash
            var hash = this.hash;
            var offsetTop = $(hash).offset().top - 60
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: offsetTop
                }, 1500);
            } // End if
            window.location.hash = hash;
    });
  }

//   Navbar Show or Hide
  function navShow (){
      $(window).scroll(function(){
        if($('html, body').scrollTop() > 650){
            $('#header').addClass('header-animate-open')
        }else{
            if($('html, body').scrollTop() < 650 && $('#header').hasClass('header-animate-open')){
                $('#header').removeClass('header-animate-open')
                $('#header').addClass('header-animate-close')
                setTimeout(function(){ $('#header').removeClass('header-animate-close') }, 220);
            }
        }
      })
  }

//   Video Show or hide
  function modaVideo(){
    const showTime = 2000
    $('#moda-video-open').on('click', () =>{
          $('#moda-video').show(showTime)
          setTimeout(function(){ 
            $('#moda-video-item').get(0).play()
        }, showTime);
      })
    $('#moda-bg-close').on('click', () => {
        $('#moda-video').hide(showTime)
        setTimeout(function(){ 
            $('#moda-video-item').get(0).pause()
            $('#moda-video-item')[0].currentTime = 0; 
        }, showTime);
    })
    $('#moda-video-close').on('click', () => {
        $('#moda-video').hide(showTime)
        setTimeout(function(){ 
            $('#moda-video-item').get(0).pause()
            $('#moda-video-item')[0].currentTime = 0; 
        }, showTime);
    })
  }