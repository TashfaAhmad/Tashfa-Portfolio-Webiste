document.querySelectorAll(".skill-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      const modal = document.getElementById("skill-modal");
      const body = modal.querySelector(".modal-body");
      const type = icon.getAttribute("data-type");
      const content = icon.getAttribute("data-content");
  
      // Clear previous content
      body.innerHTML = "";
  
      // Handle types
      if (type === "image") {
        const img = document.createElement("img");
        img.src = content;
        body.appendChild(img);
      } else if (type === "video") {
        const video = document.createElement("video");
        video.src = content;
        video.controls = true;
        body.appendChild(video);
        
      } else if (type === "text") {
        const p = document.createElement("p");
        p.textContent = content;
        body.appendChild(p);
      } else if (type === "youtube") {
        const iframe = document.createElement("iframe");
        iframe.src = content;
        iframe.width = "100%";
        iframe.height = "400";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        body.appendChild(iframe);
      }
  
      modal.style.display = "flex";
    });
  });
  
// Close modal
document.querySelector(".modal .close").addEventListener("click", () => {
  document.getElementById("skill-modal").style.display = "none";
});



// scripts/home.js

const text = "I’ve always believed creativity doesn’t belong in a box — it belongs in a galaxy. I work across tools, styles, and mediums to tell stories, explore curiosity, and build things that feel. Whether I’m designing in Photoshop or sculpting in clay, I’m always orbiting creativity. To me, every medium holds a different kind of magic. Illustration brings my thoughts to life. Code helps me shape the intangible. Craft lets my hands speak where words can’t. I don’t limit my ideas to one direction — I follow them like stars in the sky, each one glowing with its own purpose. This space is a reflection of that orbit. A place where everything I’ve created — from pixels to pottery — connects like constellations in the sky.";

const target = document.getElementById("typewriter-text");
let index = 0;
let started = false;

function typeWriterEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, 25);
  }
}

// Scroll-triggered observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;
      typeWriterEffect();
    }
  });
}, {
  threshold: 0.5 // Starts when 50% of the section is visible
});

observer.observe(document.querySelector('.bio-blurb'));