import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["coordinates"];
  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  toggle() {
    console.log(
      "Initial opacity:",
      window.getComputedStyle(this.coordinatesTarget).opacity
    );
    if (window.getComputedStyle(this.coordinatesTarget).opacity === "0") {
      this.coordinatesTarget.style.opacity = "1";
      this.coordinatesTarget.style.pointerEvents = "auto";
      this.coordinatesTarget.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start" // Align to the top of the viewport
      });
    } else {
      this.coordinatesTarget.style.opacity = "0";
      this.coordinatesTarget.style.pointerEvents = "none";
    }
  }
}
