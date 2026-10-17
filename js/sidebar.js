'use strict';


let eye=document.querySelector('#eye');
let sidebarText=document.querySelector('#navWrapper');
let sidebarBackground = document.querySelector('#sideMarginLeft')
eye.active=false;
// sidebarText.active=true;
// sidebarBackground.active=true;

window.addEventListener('resize', function(event) {
    if (document.documentElement.clientWidth < 1300 && !eye.active) {
       
    
        sidebarText.style.display = 'none';
        // sidebarText.active = false
        sidebarBackground.style.display = 'none';
        // sidebarBackground.active = false
        eye.style.display ='block';
        eye.active=true;
    }
    if (document.documentElement.clientWidth > 1300 && eye.active) {
        sidebarText.style.display = 'block';
        // sidebarText.active = true
        sidebarBackground.style.display = 'block';
        // sidebarBackground.active = true
        eye.style.display ='none';
        eye.active=false;
    }
    
    
   
})
eye.onclick = function(event) {
    if (eye.active) {
        this.innerHTML = '&#215;';
    
        sidebarText.style.display = 'block';
        sidebarText.active = true
        sidebarBackground.style.display = 'block';
        sidebarBackground.active = true;
        
        eye.active=false;
        return;
    }
    
    this.innerHTML = '👁'
    sidebarText.style.display = 'none';
    sidebarText.active = false;
    sidebarBackground.style.display = 'none';
    sidebarBackground.active = false
    eye.active=true
};