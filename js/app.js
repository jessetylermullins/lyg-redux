/* Responsive menu */
$(document).ready(function() {
    $("#navToggle a").click(function(e){
        e.preventDefault();

        // $("header > nav").slideToggle("medium");
        $("#navToggle").toggleClass("menuUp menuDown");
        $("header").toggleClass("menuOpen");
    });

    // $(window).resize(function() {
    //     if($( window ).width() >= "600") {
    //         $("header > nav").css("display", "block");
    //
    //         if($("#navToggle").attr('class') == "menuDown") {
    //             $("#navToggle").toggleClass("menuUp menuDown");
    //         }
    //     }
    //     else {
    //         $("header > nav").css("display", "none");
    //     }
    // });

    $("header > nav > ul > li > a").click(function(e) {
        if($( window ).width() <= "600") {
            if($(this).siblings().size > 0 ) {
                $(this).siblings().slideToggle("fast")
                $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});


/* Email validation */
function validate() {
  var input = document.createElement('input');
  input.type='email';
  input.value=document.getElementById('mail').value;
  console.log(input.value == '');

  if (input.checkValidity() && input.value != '') {
    document.getElementById('mail').style.background = 'green';
  } else {
    document.getElementById('mail').style.background = 'red';
  }

  return false;
}

/* show one alert if email empty, show a different alert if email invalid */




/* animated text in hero section */
var typed = new Typed('.animated-header', {
  strings: [" are loved", " are worthy", " do belong", " have value", " matter", " are valid"],
  typeSpeed: 85,
  backSpeed: 50,
  // smartBackspace: true,
  backDelay: 700,
  loop: true,
  loopCount: Infinity
});
