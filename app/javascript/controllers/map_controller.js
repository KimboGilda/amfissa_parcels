import { Controller } from "@hotwired/stimulus";
import mapboxgl from "mapbox-gl";

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
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
    });
  }
}
