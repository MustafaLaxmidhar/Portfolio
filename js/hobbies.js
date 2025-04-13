// Array of media objects (images and videos)
const media = [
  { type: "image", src: "assets/images/photo1.jpg", alt: "Photo 1" },
  { type: "image", src: "assets/images/photo2.jpg", alt: "Photo 2" },
  { type: "video", src: "assets/videos/video1.mp4", alt: "Video 1" },
  { type: "image", src: "assets/images/photo3.jpg", alt: "Photo 3" },
  { type: "video", src: "assets/videos/video2.mp4", alt: "Video 2" },
];

// Function to render the gallery
function renderGallery() {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = ""; // Clear existing content

  media.forEach((item) => {
    if (item.type === "image") {
      // Render image
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      galleryContainer.appendChild(img);
    } else if (item.type === "video") {
      // Render video
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true; // Add controls for play/pause
      video.alt = item.alt;
      video.width = 300; // Set a default width for videos
      galleryContainer.appendChild(video);
    }
  });
}

// Function to set the layout
function setLayout(layout) {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.className = `gallery-container ${layout}`;
}

// Initialize the gallery
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setLayout("grid"); // Default layout
});