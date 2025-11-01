import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteMapComponent } from '../route-map/route-map.component';
import { Route, RouteStep } from '../itinerary-service/itinerary.service';
import { RouteStepsComponent } from '../route-steps/route-steps.component';

@Component({
  selector: 'route-list',
  standalone: true,
  imports: [CommonModule, RouteMapComponent, RouteStepsComponent],
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent {
  @Input() routes: Route[] | undefined;

  getStartStation(steps: RouteStep[]): string {
    return steps.find((step: RouteStep) => step.emoji == '🚶')?.title || '';
  }

  getEndStation(steps: RouteStep[]): string {
    return steps.findLast
      ? steps.findLast((step: RouteStep) => step.emoji === '🚆')?.title || ''
      : [...steps].reverse().find((step) => step.emoji === '🚆')?.title || '';
  }
}