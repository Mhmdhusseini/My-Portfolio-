// Scroll Reveal
const scrollElements = document.querySelectorAll(".animate-on-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
const displayScrollElement = (el) => el.classList.add("active");
const hideScrollElement = (el) => el.classList.remove("active");
const handleScrollAnimation = () => {
  scrollElements.forEach(el => { elementInView(el,1.25)? displayScrollElement(el):hideScrollElement(el); });
};
window.addEventListener("scroll", handleScrollAnimation);

// Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! I will get back to you soon.");
  contactForm.reset();
});
