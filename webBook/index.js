//++----=====================>> SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
//++----=====================>> remove active from all menu item
const changeActiveItem = () => {
  menuItems.forEach((currentItem) => {
    currentItem.classList.remove("active");
  });
};
menuItems.forEach((currentItem) => {
  currentItem.addEventListener("click", (params) => {
    changeActiveItem();
    currentItem.classList.add("active");
    if (currentItem.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    }
  });
});
// =============================================================================================================================+-+
// ++----==========================>> MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");
// ++----==========================>> Search message
messageSearch.addEventListener("keyup", (params) => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((element) => {
    let name = element.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
});

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
});
// ============================================================================================================================*-*
// ++----========================================================>> THEME
const theme = document.querySelector("#theme");
const themeMod1 = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// ++----==========================>> THEME/DISPLAY CUSTOMIZATION
// ++----==========================>> opens modal
theme.addEventListener("click", () => {
  themeMod1.style.display = "grid";
});
// ++----==========================>> close model
themeMod1.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeMod1.style.display = "none";
  }
});
// ++----==========================>> font sizes
// ++----==========================>> remove active class form spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
// ++----==========================>> font size
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSizes;
    // ++----==========================>> remove active class form spans or font size selectors
    removeSizeSelector();
    // ++----==========================>> add active class form spans or font size selectors
    size.classList.toggle("active");
    // ++----==========================>> add font size form spans
    if (size.classList.contains("font-size-1")) {
      fontSizes = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSizes = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSizes = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSizes = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSizes = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    // ++----==========================>> change font size of the root html element
    document.querySelector("html").style.fontSize = fontSizes;
  });
});
// ++----==========================>> remove active class form spans or color selectors
const removeColor = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};
// ++----==========================>> change primary colors
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // ++----==========================>> remove active class form spans or color selectors
    removeColor();
    // ++----==========================>> add active class form spans or color selectors
    color.classList.toggle("active");
    // ++----==========================>> add color form spans
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});
// ++----==========================>> theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// ++----==========================>> changes BACKGROUND color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
Bg1.addEventListener("click", () => {
  // ++----==========================>> abb active class
  Bg1.classList.add("active");
  // ++----==========================>> remove active class
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // ++----==========================>> remove
  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  // ++----==========================>> abb active class
  Bg2.classList.add("active");
  // ++----==========================>> remove active class
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  // ++----==========================>> abb active class
  Bg3.classList.add("active");
  // ++----==========================>> remove active class
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
