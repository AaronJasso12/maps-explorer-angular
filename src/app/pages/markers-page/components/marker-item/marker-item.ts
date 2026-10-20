import { Component, input, output } from '@angular/core';
import type { Marker } from '../../interfaces/marker.interface';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'marker-item',
  templateUrl: './marker-item.html',
})
export class MarkerItem {
  marker = input.required<Marker>();

  markerClick = output<void>();
  markerDoubleClick = output<void>();
}
