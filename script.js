 window.addEventListener('scroll', function() {
     var nav = document.querySelector('nav');
     if (window.scrollY > 0) {
       nav.classList.remove('show');
     } else {
       nav.classList.add('show');
     }
   });



//   const element = document.getElementById("active2");

// element.addEventListener("click", function() {
//   window.location.href = "aboutus.html";
// });