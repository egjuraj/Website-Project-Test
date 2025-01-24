document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#carousel .carousel-inner .item img");
    const fileInput = document.getElementById("fileUpload");
  
 
    images.forEach((img) => {
      const savedImage = localStorage.getItem(`image-${img.dataset.id}`);
      if (savedImage) {
        img.src = savedImage;
      }
    });
  
  
    images.forEach((img) => {
      img.addEventListener("click", () => {
        
        fileInput.currentImage = img;
        fileInput.click();
      });
    });
  
  
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (event) => {
          const newImageSrc = event.target.result; 
  
        
          fileInput.currentImage.src = newImageSrc;
  
        
          const imageId = fileInput.currentImage.dataset.id;
          localStorage.setItem(`image-${imageId}`, newImageSrc);
  
          alert("Image updated and saved!");
        };
  
        reader.readAsDataURL(file); 
      }
    });
  });