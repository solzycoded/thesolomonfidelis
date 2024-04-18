(function() {
    "use strict";

    function resetNavBar() {
        const navBar       = document.querySelector("#header");
        const mobileNavBar = document.querySelector(".mobile-nav-toggle");

        if(window.innerWidth > 991){
            navBar.style.left = 0;
            mobileNavBar.classList.add("bi-chevron-right");
        }
        else {
            navBar.style.left = "-300px";
            // mobileNavBar.classList.add("bi-chevron-left");
        }
    }
  
    window.onresize = resetNavBar;
})()