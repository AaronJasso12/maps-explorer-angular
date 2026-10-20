import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/esm';
import { environment } from '../../../environments/environment';
import { v4 as UUIDV4 } from 'uuid';
import { LngLatLike } from 'mapbox-gl';
import type { Marker } from './interfaces/marker.interface';
import { MarkerItem } from './components/marker-item/marker-item';

const MAPBOX_TOKEN = environment.mapboxKey;

@Component({
  selector: 'app-markers-page',
  imports: [MarkerItem],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit{

  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map|null>(null);
  markers = signal<Marker[]>([]);

  ngAfterViewInit(): void {
    if (!this.divElement()?.nativeElement) return;
    // await new Promise((resolve) => setTimeout(resolve, 80));
    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
        accessToken: MAPBOX_TOKEN, // associates the map with your Mapbox account and its permissions
        container: element, // container ID
        center: [139.7622578262909, 35.69124716164654], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 14 // starting zoom
    });

    // const marker = new mapboxgl.Marker({
    //   draggable: false,
    //   color: 'red',
    // })
    // .setLngLat([139.7622578262909, 35.69124716164654])
    // .addTo(map);

    // marker.on('dragend', (event) => {
    //   console.log(event);
    // });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent) {
    if (!this.map()) return;

    const map = this.map()!;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const coords = event.lngLat;

    const mapboxMarker = new mapboxgl.Marker({
      color
    })
    .setLngLat(coords)
    .addTo(map);

    const newMarker: Marker = {
      id: UUIDV4(),
      mapboxMarker: mapboxMarker
    };

    // this.markers.set([newMarker, ...this.markers()]);
    this.markers.update((markers) => [newMarker, ...markers]);
    console.log(this.markers());
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map()) return;

    this.map()?.flyTo({
      center: lngLat
    });
  }

  deleteMarker(marker: Marker) {
    console.log('delete');
    if (!this.map()) return;
    const map = this.map();

    marker.mapboxMarker.remove();
    this.markers.set(this.markers().filter(m => m.id !== marker.id));
  }
}
