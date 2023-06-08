const images = document.querySelectorAll('.image-container img');

images.forEach((image) => {
  image.addEventListener('click', () => {
   
    const enlargedImage = document.createElement('div');
    enlargedImage.classList.add('enlarged-image');

    
    const innerImage = document.createElement('img');
    innerImage.src = image.src;
    innerImage.alt = image.alt;

   
    enlargedImage.appendChild(innerImage);

    
    document.body.appendChild(enlargedImage);

    
    enlargedImage.addEventListener('click', () => {
      document.body.removeChild(enlargedImage);
    });
  });
});