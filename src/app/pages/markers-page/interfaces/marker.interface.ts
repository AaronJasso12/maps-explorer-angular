import * as mapboxgl from 'mapbox-gl/esm';

export interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}
