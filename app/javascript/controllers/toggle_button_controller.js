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
  }
}
