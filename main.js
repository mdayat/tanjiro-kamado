// Menu
const btnMenu = document.getElementById("menu");
const menuItem = document.querySelectorAll("#mobile-nav a");

function MenuOpenedElement() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32px" height="32px" fill="#fff"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
}

function MenuClosedElement() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32px" height="32px" fill="#fff"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
}

function openMenu(navEl, svgEl) {
  btnMenu.setAttribute("data-menu", "opened");
  navEl.style.display = "block";

  btnMenu.removeChild(svgEl);
  btnMenu.innerHTML = MenuOpenedElement();
}

function closeMenu(navEl, svgEl) {
  btnMenu.setAttribute("data-menu", "closed");
  navEl.style.display = "none";

  btnMenu.removeChild(svgEl);
  btnMenu.innerHTML = MenuClosedElement();
}

function handleMenu() {
  const isClosed =
    btnMenu.getAttribute("data-menu") === "closed" ? true : false;
  const navEl = document.getElementById("mobile-nav");
  const svgEl = btnMenu.children[0];

  if (isClosed) {
    openMenu(navEl, svgEl);
  } else {
    closeMenu(navEl, svgEl);
  }
}

btnMenu.addEventListener("click", handleMenu);
menuItem.forEach((item) => item.addEventListener("click", handleMenu));

window.addEventListener("resize", () => {
  const navEl = document.getElementById("mobile-nav");
  const svgEl = btnMenu.children[0];

  const viewport = window.innerWidth;
  if (viewport < 1024) return;

  if (btnMenu.getAttribute("data-menu") === "opened") {
    closeMenu(navEl, svgEl);
  }
});

// Breathing Style
const btnToggle = document.getElementById("toggle");

const waterBreathingDesc =
  "Taught by Sakonji Urokodaki, a previous Water Hashira and Water Breathing Cultivator, this was Tanjiro's initial Breathing Style. He became extremely proficient in it, to the point where he could modify pre-existing forms to suit the circumstance.";

const sunBreathingDesc =
  "Hinokami Kagura is a Breathing Style only known and taught by the Kamado Family. During his near-death experience in his battle with Rui, Tanjiro awakened this in a memory of his father teaching him this Breathing Style. As his body was more suited to the Hinokami Kagura, he quickly overpowered the Lower Rank demon.";

function changeImage(path, alt) {
  const mobileImg = document.getElementById("mobile-img");
  const desktopImg = document.getElementById("desktop-img");

  mobileImg.setAttribute("src", path);
  mobileImg.setAttribute("alt", alt);

  desktopImg.setAttribute("src", path);
  desktopImg.setAttribute("alt", alt);
}

function changeColorTheme(color) {
  const headerEl = document.getElementsByTagName("header")[0];
  const footerEl = document.getElementsByTagName("footer")[0];

  headerEl.style.backgroundColor = color;
  footerEl.style.backgroundColor = color;
}

function changeDescription(text) {
  const paragraphEl = document.getElementById("description");
  paragraphEl.textContent = text;
}

btnToggle.addEventListener("click", () => {
  const breathingStyle = btnToggle.getAttribute("data-toggle");
  const svgEl = btnToggle.children[0];

  const waterColor = "#2389da";
  const sunColor = "#ff4d00";

  const waterImgPath = "./images/water_style.webp";
  const sunImgPath = "./images/sun_style.webp";

  if (breathingStyle === "water") {
    btnToggle.setAttribute("data-toggle", "sun");
    svgEl.setAttribute("fill", sunColor);

    changeImage(sunImgPath, "Tanjiro Kamado Sun Breathing");
    changeColorTheme(sunColor);
    changeDescription(sunBreathingDesc);
  } else {
    btnToggle.setAttribute("data-toggle", "water");
    svgEl.setAttribute("fill", waterColor);

    changeImage(waterImgPath, "Tanjiro Kamado Sun Breathing");
    changeColorTheme(waterColor);
    changeDescription(waterBreathingDesc);
  }
});
