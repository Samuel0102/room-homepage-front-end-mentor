function showMenu() {
  let hiddenNav = document.getElementById("hidden-nav");

  if (hiddenNav.style.display === "none") {
    hiddenNav.style.display = "flex";
  } else {
    hiddenNav.style.display = "none";
  }
}

function verifySlideController() {
  let sliderController = document.getElementById("slide-controller");

  sliderController.addEventListener("click", function (ev) {
    if (ev.target.getAttribute("alt") === "slide-left") {
      changeSlide("to-left");
    } else {
      changeSlide("to-right");
    }
  });
}

function changeSlide(action) {
  const titles = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ];

  const texts = [
    `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`,
  ];

  const images = [
    "/assets/desktop-image-hero-1.jpg",
    "/assets/desktop-image-hero-2.jpg",
    "/assets/desktop-image-hero-3.jpg",
  ];

  let title = document.getElementById("description-title");
  let text = document.getElementById("description-text");
  let slideBox = document.getElementById("slide-box");
  let description = document.getElementById("description");
  let slidePosition = titles.indexOf(title.innerText);

  description.classList.remove("animate");

  if (action === "to-left") {
    if (slidePosition === 0) {
      slidePosition = 2;
    } else {
      slidePosition--;
    }
  } else {
    if (slidePosition === 2) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
  }
  void description.offsetWidth;

  title.innerText = titles[slidePosition];
  text.innerText = texts[slidePosition];
  description.className = "animate";
  slideBox.setAttribute(
    "style",
    "background-image: url(" + images[slidePosition] + ");"
  );
}
