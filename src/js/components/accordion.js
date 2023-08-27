import Accordions from "../functions/Accordions";

export default function () {
  console.log("fmrkgm")
  if (document.querySelector(".js-accordions")) {
    new Accordions({
      selectors: {
        container: '.js-accordions',
        wrapper: '.js-accordion',
        button: '.js-accordion-btn',
        content: '.js-accordion-content'
      }
    });
  }
}
