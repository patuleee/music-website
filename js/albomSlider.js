const slider = document.getElementById('imgSlider');
    slider.addEventListener('wheel', function(event) {
      event.preventDefault();
      slider.scrollLeft += event.deltaY;
    });