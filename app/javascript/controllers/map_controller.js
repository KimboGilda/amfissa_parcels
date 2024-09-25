import { Controller } from "@hotwired/stimulus";
import mapboxgl from "mapbox-gl";

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array,
    parcelName: String, // New value for the parcel name
    parcelKaek: String, // New value for the parcel KAEK
    parcelArea: Number // New value for the parcel area
  };

  connect() {
    mapboxgl.accessToken = this.apiKeyValue;

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [22.37773844634055, 38.52764920118068],
      zoom: 14
    });

    this.addPolygon();
    this.#fitMapToMarkers();
  }

  addPolygon() {
    const polygon = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [this.markersValue]
      }
    };

    // Add the polygon to the map as a source
    this.map.on("load", () => {
      this.map.addSource("polygon", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [polygon]
        }
      });

      // Add a new layer to visualize the polygon
      this.map.addLayer({
        id: "polygon-layer",
        type: "fill",
        source: "polygon", // Reference the source you created
        layout: {},
        paint: {
          "fill-color": "#00712D", // Fill color
          "fill-opacity": 0.5
        }
      });

      this.map.addLayer({
        id: "polygon-border",
        type: "line",
        source: "polygon",
        layout: {},
        paint: {
          "line-color": "#697565",
          "line-width": 1
        }
      });

      // Add click event listener to the polygon to display the popup
      this.map.on("click", "polygon-layer", (e) => {
        // Create the popup content with parcel details
        const popupContent = `
          <strong>Name:</strong> ${this.parcelNameValue}<br>
          <strong>KAEK:</strong> ${this.parcelKaekValue}<br>
          <strong>Area:</strong> ${this.parcelAreaValue} m²
        `;

        // Create a popup and set its location and content
        new mapboxgl.Popup()
          .setLngLat(e.lngLat) // Use the clicked location's lng/lat
          .setHTML(popupContent) // Set the content of the popup
          .addTo(this.map); // Add the popup to the map
      });

      // Change the cursor to pointer when hovering over the polygon
      this.map.on("mouseenter", "polygon-layer", () => {
        this.map.getCanvas().style.cursor = "pointer";
      });

      // Change the cursor back to default when not hovering over the polygon
      this.map.on("mouseleave", "polygon-layer", () => {
        this.map.getCanvas().style.cursor = "";
      });
    });
  }

  // Function to refocus the map on all markers
  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds();

    // Loop through each coordinate pair in the polygon and extend the bounds
    this.markersValue.forEach((coordinate) => {
      bounds.extend(coordinate);
    });

    // Fit the map to the polygon's bounds
    this.map.fitBounds(bounds, {
      padding: 70, // Optional padding to add space around the polygon
      maxZoom: 16, // Maximum zoom level
      duration: 1000 // Smooth transition animation (1 second)
    });
  }
}
