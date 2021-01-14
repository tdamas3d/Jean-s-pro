/*Start Javascript Developer code */
/* Enclosing Our javascript into javascript's DOM "ready" function for the script to run after the entire html oage is loaded  */
$(document).ready(function(){
    
   
  /*The code below dynamically get and displays the content of user's action, i.e, click, selection, ... into the zone of content on the home page */
  /* It simply access and use in the home page the content from external resources */
  
  var linkUrl="welcome.html";
  $(".action-links").click(function(){
  /*$("header").height(330);*/
  
  
  /* FIRST CREATE CODE FOR SCROLLING TO A CONTENT DIV WHEN CLEICKED AN INTERNAL LINK*/
  /*******************************************Add smooth scrolling to all links */
            $("a").on('click', function (event) { 
  
                // Make sure this.hash has a value 
                // before overriding default behavior 
                /*if (this.hash !== "") { */
  
                    // Prevent default anchor 
                    // click behavior 
                    /*event.preventDefault(); */
  
                    // Store hash 
                    var hash = this.hash; 
  
                    // Using jQuery's animate() method  
                    // to add smooth page scroll 
                    // The optional number (800) specifies 
                    // the number of milliseconds it takes 
                    // to scroll to the specified area 
                    $('html, body').animate({ 
                        scrollTop: $(hash).offset().top 
                    }, 500, function () { 
  
                        // Add hash (#) to URL when done  
                        // scrolling (default click behavior) 
                        window.location.hash = hash; 
                    }); 
                /*} End if */
            }); 
  
   /* END OF CODE FOR SCROLLING TO A CONTENT DIV WHEN CLEICKED AN INTERNAL LINK*/
  
  
  
  
  
  /* Now create a code to dynamically detect which link the user clicked and assign the corresponding web page and
  Then display it in the content display zone using ajax*/
  
  var whichid = this.id;
  switch(whichid) {
    case 'home-link':
      linkUrl = "welcome.html";
      /*$("header").height(611);*/
      break;
    case 'about-link':
      linkUrl = "about.html";
      break;
    case 'projects-link':
      linkUrl = "projects.html";
      break;
      case 'working-with-me-link':
      linkUrl = "working-with-me.html";
      break;
    case 'contactus-link':
      linkUrl = "contactus.html";
      break;
    case 'home-blink':
      linkUrl = "welcome.html";
      break;
    case 'about-blink':
      linkUrl = "about.html";
      break;
    case 'projects-blink':
      linkUrl = "projects.html";
      break;
      case 'working-with-me-blink':
      linkUrl = "working-with-me.html";
      break;
    case 'contactus-blink':
      linkUrl = "contactus.html";
      break;
    case 'contact-form-submission-link':
      linkUrl = "contactus.php";
      break;
      default:
    linkUrl = "welcome.html";
  }


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        /*$("#content-display-zone").html(this.responseText);*/
        $("#rcontent").html(this.responseText);
    }
};

xhr.open("GET", linkUrl);

xhr.send(); 

 });  
  
/* End of the code to dynamically detect which link the user clicked and assign the corresponding web page and
  Then display it in the content display zone using ajax*/
 

}); /*end of jquery scripts*/