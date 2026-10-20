import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { HouseProperty } from '../../../pages/houses-page/interfaces/house-property.interface';
import { Marker } from '../../../pages/markers-page/interfaces/marker.interface';
import { environment } from '../../../../environments/environment';

import type mapboxglType from 'mapbox-gl';
declare const mapboxgl: typeof mapboxglType;

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
})
export class MiniMap implements AfterViewInit{
  lngLat = input.required<{lng: number, lat: number}>();
  mapElement = viewChild<ElementRef>('map');
  zoom = input<number>(14);

  async ngAfterViewInit() {
    if (!this.mapElement()?.nativeElement) return;
    const element = this.mapElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element,
      center: this.lngLat(),
      zoom: this.zoom(),
      interactive: false,
    });

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({
      color: color
    })
    .setLngLat(this.lngLat())
    .addTo(map);
  }
}
