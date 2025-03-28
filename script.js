function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}


function toggleSearchBox() {
    var searchBox = document.getElementById('searchBox');
    searchBox.style.display = (searchBox.style.display === 'block') ? 'none' : 'block';
}

function changeSearchContent() {
    const searchContents = ['New content 1', 'New content 2', 'New content 3'];
    const searchInput = document.getElementById('searchInput');
    searchInput.value = searchContents[searchContentIndex];
    searchContentIndex = (searchContentIndex + 1) % searchContents.length;
}

function startScanning() {
    const scanner = document.getElementById('scanner');
    scanner.style.display = 'block';
    scanner.style.animation = 'none';  // Resetting the animation
    void scanner.offsetWidth;  // Trigger reflow
    scanner.style.animation = null;  // Restarting the animation
}
const imageContainer = document.getElementById('image-container');

function animateImages() {
    setInterval(() => {
        imageContainer.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            const firstImage = imageContainer.firstElementChild;
            imageContainer.appendChild(firstImage);
            imageContainer.style.transition = 'none';
            imageContainer.style.transform = 'translateX(0)';
            setTimeout(() => {
                imageContainer.style.transition = 'transform 6s ease-in-out';
            });
        }, 1000);
    }, 5000); // Change the interval as needed (5000 milliseconds = 5 seconds)
}

animateImages();





