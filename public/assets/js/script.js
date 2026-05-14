/* ES6 */

// const toggleMenu = document.getElementById('toggle-menu')
const toggleMenu = document.querySelector("#toggler-menu");
const mobileMenuCover = document.querySelector(
  "#mobile-menu > div:nth-child(2)",
);
const mobileMenuWapper = document.querySelector(
  "#mobile-menu > div:nth-child(3)",
);
const closeMobileMenuBtn = mobileMenuWapper.querySelector(
  "div:nth-child(1) > button",
);

toggleMenu.addEventListener("click", () => {
  if (mobileMenuCover.classList.contains("hidden")) {
    mobileMenuCover.classList.remove("hidden");
    mobileMenuCover.classList.add("block");
  }
  if (mobileMenuWapper.classList.contains("translate-x-full")) {
    mobileMenuWapper.classList.remove("translate-x-full");
    mobileMenuWapper.classList.add("translate-x-0");
  }
});

const CloseMobileMenu = () => {
  if (mobileMenuCover.classList.contains("block")) {
    mobileMenuCover.classList.remove("block");
    mobileMenuCover.classList.add("hidden");
  }
  if (mobileMenuWapper.classList.contains("translate-x-0")) {
    mobileMenuWapper.classList.remove("translate-x-0");
    mobileMenuWapper.classList.add("translate-x-full");
  }
};

// mobileMenuCover.addEventListener("click", () => {
//   if (mobileMenuCover.classList.contains("block")) {
//     mobileMenuCover.classList.remove("block");
//     mobileMenuCover.classList.add("hidden");
//   }
//   if (mobileMenuWapper.classList.contains("flex")) {
//     mobileMenuWapper.classList.remove("flex");
//     mobileMenuWapper.classList.add("hidden");
//   }
// });
mobileMenuCover.addEventListener("click", CloseMobileMenu);
// closeMobileMenuBtn.addEventListener("click", () => {
//   if (mobileMenuCover.classList.contains("block")) {
//     mobileMenuCover.classList.remove("block");
//     mobileMenuCover.classList.add("hidden");
//   }
//   if (mobileMenuWapper.classList.contains("flex")) {
//     mobileMenuWapper.classList.remove("flex");
//     mobileMenuWapper.classList.add("hidden");
//   }
// });
closeMobileMenuBtn.addEventListener("click", CloseMobileMenu);
