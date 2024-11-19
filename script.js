// Add the 'visible' class when sections are scrolled into view
document.addEventListener("scroll", function () {
  document.querySelectorAll(".fade-in").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
});

const testimonials = [
  {
    name: "Sarah Lee",
    feedback:
      "This consulting firm transformed our business strategy and helped us exceed our goals.",
    image: "sarah.jpg",
  },
  {
    name: "James Allen",
    feedback: "Incredible insights and professionalism. Highly recommend!",
    image: "james.jpg",
  },
  {
    name: "Priya Kumar",
    feedback:
      "The team provided a personalized approach that fit our unique needs perfectly.",
    image: "priya.jpg",
  },
];

let currentTestimonial = 0;
let isPaused = false;
const testimonialCard = document.getElementById("testimonial-card");
const testimonialImage = document.getElementById("testimonial-image");
const testimonialName = document.getElementById("testimonial-name");
const testimonialFeedback = document.getElementById("testimonial-feedback");
const pauseBtn = document.getElementById("pause-btn");

function updateTestimonial() {
  testimonialImage.src = testimonials[currentTestimonial].image;
  testimonialName.textContent = testimonials[currentTestimonial].name;
  testimonialFeedback.textContent = `"${testimonials[currentTestimonial].feedback}"`;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function togglePause() {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
}

setInterval(() => {
  if (!isPaused) nextTestimonial();
}, 5000); // Rotate every 5 seconds

// Initialize the first testimonial
updateTestimonial();
