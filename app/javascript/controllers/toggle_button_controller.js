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
    } else {
      this.coordinatesTarget.style.opacity = "0";
      this.coordinatesTarget.style.pointerEvents = "none";
    }
  }
}
