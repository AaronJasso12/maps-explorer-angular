import type mapboxglType from 'mapbox-gl';
declare const mapboxgl: typeof mapboxglType;

export interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
}
