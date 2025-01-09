'use strict';

// Helper Function for Toggling Classes
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar Toggle for Mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Testimonials Modal Functionality
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal Elements
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add Click Event for Testimonials
testimonialsItems.forEach((item) => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;

    toggleModal();
  });
});

// Close Modal on Button or Overlay Click
[modalCloseBtn, overlay].forEach((el) =>
  el.addEventListener("click", toggleModal)
);

// Custom Select and Filtering
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", () => elementToggleFunc(select));

const filterProjects = (selectedValue) => {
  filterItems.forEach((item) => {
    const category = item.dataset.category;
    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Handle Custom Select Dropdown
selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterProjects(selectedValue);
  });
});

// Handle Filter Buttons
let lastActiveFilterBtn = filterBtns[0];

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterProjects(selectedValue);

    lastActiveFilterBtn.classList.remove("active");
    btn.classList.add("active");
    lastActiveFilterBtn = btn;
  });
});

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.innerHTML.toLowerCase();

    pages.forEach((page, index) => {
      const isActive = page.dataset.page === targetPage;

      page.classList.toggle("active", isActive);
      navigationLinks[index].classList.toggle("active", isActive);

      if (isActive) window.scrollTo(0, 0);
    });
  });
});
// Dynamic Background Switcher
const imageBaseUrl = "https://source.unsplash.com/1600x900/?gradient"; // Random image URL from Unsplash
let index = 0;

setInterval(() => {
  // Fetch random background image from Unsplash
  const bgImageUrl = `${imageBaseUrl}&random=${Math.random()}`;
  document.body.style.backgroundImage = `url(${bgImageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";
  index = (index + 1) % colors.length;
}, 10000);

// Navigate to Main Content
function navigateToMain() {
  document.querySelector("main").scrollIntoView({
    behavior: "smooth",    // smooth scrolling
    block: "center",       // center the element vertically
    inline: "center"       // center the element horizontally
  });
}
