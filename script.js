gsap.registerPlugin(ScrollTrigger);

// Animate the paragraph when scrolling down
gsap.to(".nowrap ", {
  x: "-100%", // Move the paragraph to the left
  width: "100%", // Expand the width to 100%
  duration: 30, // Duration of the animation in seconds
  scrollTrigger: {
    trigger: ".nowrap ",
    start: "top center", // Trigger when the top of the paragraph reaches the center of the viewport
    end: "bottom center",
    scrub: true, // Smoothly animate the paragraph
    toggleActions: "play none none reverse" // Reverse the animation when scrolling back up
  }
});








// Define the animations for the first timeline
const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".About",
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });

  tl1.to("#figure", { x: 800, y: 800, boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)" });
  tl1.to("#bottle", { x: 800, y: 800, boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)" }, "-=0.1");

  // Stop the animation and move elements to the last div
  tl1.eventCallback("onComplete", function() {
    gsap.to("#shape, #bottle", { x: 730, y: 730, duration: 0, boxShadow: "none" });
    document.querySelector('.FromHimalaya .rght-three').appendChild(document.getElementById('shape'));
    document.querySelector('.FromHimalaya .rght-three').appendChild(document.getElementById('bottle'));
  });

  // Define rotation animation for #shape2
  gsap.to("#shape2", {
    scrollTrigger: {
      trigger: "#shape2",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    rotation: 360,
    ease: "none"
  });




// Define the animation function
function animateBottle() {
    // Define the GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".five", // Trigger element
        start: "top 80%", // Start the animation when the top of the trigger element reaches 80% of the viewport height
        end: "bottom 20%", // End the animation when the bottom of the trigger element reaches 20% of the viewport height
        scrub: true, // Smoothly scrub through the animation
        //markers: true // Display markers for debugging
      }
    });
  
    // Add pendulum-like animation to the black bottle
    tl.to("#blackbottle", {
      rotation: 15, // Initial rotation angle
      transformOrigin: "center center", // Set transform origin to the center
      ease: "slow(0.7, 0.)", // Use a custom slow easing function
      duration: 4 // Animation duration
    }).to("#blackbottle", {
      rotation: -15, // Final rotation angle
      ease: "slow(0.7, 0.7)", // Use a custom slow easing function
      duration: 6, // Animation duration
      repeat: -0, // Repeat the animation indefinitely
      yoyo: true // Swing back and forth
    });
  }
  
  // Call the animation function when the document is loaded
  document.addEventListener("DOMContentLoaded", animateBottle);






    // Changing heading text animation
    const words = ['A Better World', 'A Change', 'A Cause'];
    let index = 0;
    const changingHeading = document.getElementById('changing-heading');
  
    function changeText() {
      changingHeading.textContent = words[index];
      index = (index + 1) % words.length;
    }
  
    // Call changeText function to update the heading text initially
    changeText();
  
    // Call changeText function periodically to update the heading text
    setInterval(changeText, 1500); // Change text every 1.5 seconds
    ;
  
  



// for faq

  function toggleAnswer(element) {
    const answer = element.querySelector('.answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}