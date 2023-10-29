document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderImages = sliderContainer.querySelectorAll('.slider-image');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentIndex = 0;
  
    function showImage(index) {
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
      }
      sliderImages[index].style.display = 'block';
    }
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
      showImage(currentIndex);
    });
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % sliderImages.length;
      showImage(currentIndex);
    });
  
    showImage(currentIndex);
});