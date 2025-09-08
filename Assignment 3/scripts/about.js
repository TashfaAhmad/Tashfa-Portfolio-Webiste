// Select modal + content box
const modal = document.getElementById('about-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Content map for each icon (you’ll customize this!)
const modalContent = {
  story: `
    <h2>My Story</h2>
    <p>For as long as I can remember, I’ve been artistically involved — it’s always been a natural part of my life. Every piece I create is deeply rooted in connection, often inspired by the people closest to me. Whether it’s designing something for a family member or simply capturing a shared feeling, my art is always personal. There isn’t one defining project that shaped my path — just the quiet, ongoing joy I feel every time I create. That feeling reminds me I’m doing what I love, and that’s always been enough.</p>
  `,
  galacticcomforts: `
    <h2>Galactic Comforts</h2>
    <div class="comforts">
      <div class="comfort-item" data-quote="Love is like the wind. I can’t see it, but I can feel it.">A Walk to Remember</div>
      <div class="comfort-item" data-quote="Somebody told me that this is the place where everything’s better and everything’s safe.">One Tree Hill</div>
      <div class="comfort-item" data-quote="Best. Day. Ever.">Tangled</div>
      <div class="comfort-item" data-quote="If I loved you less, I might be able to talk about it more.">Emma</div>
      <div class="comfort-item cdramas" id="cdrama-trigger">C-Dramas
        <div class="cdrama-bubbles">
          <div class="cdrama-bubble">Hidden Love</div>
          <div class="cdrama-bubble">When I Fly Towards You</div>
          <div class="cdrama-bubble">Always Home</div>
          <div class="cdrama-bubble">Amidst a Snowstorm Of Love</div>
        </div>
      </div>
    </div>
  `,
  echoes: `
  <h2>Echoes in My Orbit</h2>  
  <div class="audio-wrapper">
    <div class="fake-audio-wrapper">
      <button id="fake-play" class="fake-play-button">▶️ Play</button>
    </div>
    <p id="jb-caption" style="margin-top: 1rem; font-family: 'Poppins', sans-serif; display: none;">💜 My fav — the Jonas Brothers</p>
  </div>
  `,
  funfacts: `
    <h2>Fun Facts</h2>
    <p>🪡 <b>I can learn almost any craft-related thing just by watching someone do it.</b> That’s how I learned to crochet — not through instructions, but simply by sitting in silence and watching my grandmother’s hands move. When it comes to art, I absorb by seeing. If I can see it, I can create it.</p>
  `, 
  timeline: `
  <h2>My Timeline</h2>
  <div class="vertical-timeline">
    <div class="timeline-step"><div class="dot"></div><p>My first intro to this world was through knitting.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>Then came watercolor painting for most of my childhood.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>Sketchbook drawingentered my life next.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>I explored acrylic paint — bold and layered.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>I learned to crochet after that (thanks grandma 💗).</p></div>
    <div class="timeline-step"><div class="dot"></div><p>Then I discovered the Adobe creative tools.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>I got into texture painting — paste, pigment, and patience.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>I started digital drawing with a tablet.</p></div>
    <div class="timeline-step"><div class="dot"></div><p>Most recently, I started coding websites.</p></div>
  </div>
  `,
  inspiration: `
    <h2>My Inspiration</h2>
    <div class="photo-slideshow">
      <img id="slideshow-image" src="images/inspo/family1.jpg" alt="Photo 1" />
      <div class="slideshow-controls">
        <button onclick="changeSlide(-1)">⟵ Prev</button>
        <button onclick="changeSlide(1)">Next ⟶</button>
      </div>
    </div>
  `,
  glimpse: `
    <h2>A Glimpse of Me</h2>
    <p>If you’re ever looking for a glimpse of me, look for a galaxy. I’ve always been drawn to the stars — and that shows up in almost everything I create. Whether it’s a swirl of purple and blue, a dreamy aurora, or a tiny constellation hidden in the details, there’s always a little piece of space woven into my work. I don’t just love the look of the galaxy — I love what it represents: imagination, possibility, and a sense of wonder. That’s me, in every color, shape, and story I share.</p>
  `,
  message: `
    <h2>Leave Me a Message</h2>
    <form class="message-form" onsubmit="handleMessage(event)">
      <textarea class="message-only" placeholder="Your message..." rows="5" required></textarea>
      <div class="message-submit">
        <button type="submit">Send 🌠</button>
      </div>
    </form>
  `
};

// Click on a planet icon
document.querySelectorAll('.planet-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const key = icon.getAttribute('data-modal');
    modalBody.innerHTML = modalContent[key] || "<p>Content coming soon!</p>";
    modal.style.display = 'flex';

    if (key === 'timeline') {
      setTimeout(animateVerticalTimeline, 200); // tiny delay for smoother load
    }
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Extra: click outside modal closes it too
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/* ----- Slideshow for Photo Moments ----- */
let photoIndex = 1;
const photoPaths = [
  "images/inspo/family1.jpg",
  "images/inspo/family2.jpg",
  "images/inspo/family3.jpg",
  "images/inspo/family4.jpg",
  "images/inspo/family5.jpg",
  "images/inspo/family6.jpg",
  "images/inspo/family7.jpg",
  "images/inspo/family8.jpg",
  "images/inspo/family9.jpg",
  "images/inspo/family10.jpg",
  "images/inspo/family11.jpg",
  "images/inspo/family12.jpg",
  "images/inspo/family13.jpg",
  "images/inspo/family14.jpg",
  "images/inspo/family15.jpg",
];

function changeSlide(n) {
  photoIndex += n;
  if (photoIndex > photoPaths.length) photoIndex = 1;
  if (photoIndex < 1) photoIndex = photoPaths.length;
  document.getElementById("slideshow-image").src = photoPaths[photoIndex - 1];
}

/* ----- Fake Send Handler for Message Form ----- */
function handleMessage(event) {
  event.preventDefault();
  alert('🌟 Your message has been sent into the stars! Thank you!');
  document.querySelector('.message-form').reset();
}


document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "start-timeline") {
    const container = document.getElementById("timeline-container");
    const line = document.getElementById("timeline-line");
    const events = container.querySelectorAll(".timeline-event");
    let index = 0;

    container.classList.add("revealed");
    line.style.width = "0%"; // reset line

    const interval = setInterval(() => {
      if (index >= events.length) {
        clearInterval(interval);
        return;
      }
      events[index].style.opacity = 1;
      line.style.width = `${((index + 1) / events.length) * 100}%`;
      index++;
    }, 700);
  }
});

function animateVerticalTimeline() {
  const steps = document.querySelectorAll('.vertical-timeline .timeline-step');
  let index = 0;

  const interval = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(interval);
      return;
    }
    steps[index].style.opacity = 1;
    steps[index].style.transform = 'translateY(0)';
    index++;
  }, 600); // You can speed this up or slow it down!
}


// Trigger REAL audio when clicking fake player button
document.addEventListener("click", function (e) {
  const realAudio = document.getElementById("jb-audio");
  const caption = document.getElementById("jb-caption");
  const widget = document.getElementById("music-widget");

  if (e.target && e.target.id === "fake-play") {
    realAudio.play();
    if (caption) caption.style.display = "block";
    if (widget) widget.style.display = "flex";
  }
});

// Stop music from floating widget
document.getElementById("stop-music").addEventListener("click", () => {
  const realAudio = document.getElementById("jb-audio");
  const widget = document.getElementById("music-widget");

  realAudio.pause();
  realAudio.currentTime = 0;
  widget.style.display = "none";
});

