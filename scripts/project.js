function initGallery(imagePaths) {
    let currentIndex = 0;

    // Get references to the HTML elements
    const galleryImage = document.getElementById('galleryImage');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to update the image
    function updateImage() {
        galleryImage.src = imagePaths[currentIndex];
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagePaths.length - 1; // Loop back to the last image
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < imagePaths.length - 1) ? currentIndex + 1 : 0; // Loop back to the first image
        updateImage();
    });

    // Initial image load
    updateImage();
}

// Define image arrays for different projects
const imageConfig = {
    holeinice: [
        './images/holeinice/image1.png',
        './images/holeinice/image2.png',
        './images/holeinice/image3.png',
        './images/holeinice/image4.png',
        './images/holeinice/image5.png',
        './images/holeinice/image6.png',
        './images/holeinice/image7.png'
    ],
    playground: [
        './images/playground/image1.png',
        './images/playground/image2.png',
        './images/playground/image3.png',
        './images/playground/image4.png',
        './images/playground/image5.png'
    ],
    alsat: [
        './images/alsat/image1.png',
        './images/alsat/image2.png',
        './images/alsat/image3.png',
        './images/alsat/image4.png',
        './images/alsat/image5.png',
        './images/alsat/image6.png',
        './images/alsat/image7.png'
        
    ],
};

// Get the project identifier from the body tag
const project = document.body.dataset.project;

// Check if the project exists in the config, then initialize the gallery
if (imageConfig[project]) {
    initGallery(imageConfig[project]);
} else {
    console.error('Project not found: ', project);
}

function toggleCode(codeId) {
    var codeSnippet = document.getElementById(codeId);
    if (codeSnippet.style.display === "none") {
        codeSnippet.style.display = "block";
    } else {
        codeSnippet.style.display = "none";
    }
}