'use strict';


        let button1=document.querySelector('.switches #flippingVideo1');
        let button2=document.querySelector('.switches #flippingVideo2');
        let button3=document.querySelector('.switches #flippingVideo3');

        button1.onclick=function(event) {
            document.getElementById('clips1').style.display='flex';
            document.getElementById('clips2').style.display='none';
            document.getElementById('clips3').style.display='none';
        };
        button2.onclick=function(event) {
            document.getElementById('clips1').style.display='none';
            document.getElementById('clips2').style.display='flex';
            document.getElementById('clips3').style.display='none';
        };
        button3.onclick=function(event) {
            document.getElementById('clips1').style.display='none';
            document.getElementById('clips2').style.display='none';
            document.getElementById('clips3').style.display='flex';
        };



