window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    var elementOffset = document.getElementById('navbar').offsetTop;
    var myElement = document.getElementById('navbar');
  
    if (scroll > elementOffset) {
      myElement.classList.add('navbar-small');
    } else {
      myElement.classList.remove('navbar-small');
    }
  });
document.getElementById("year").innerHTML = new Date().getFullYear();