import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RouteStep {
  emoji: string;
  duration: string;
  title: string;
  description: string;
  address?: string;
}

@Component({
  selector: 'route-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent {
  @Input() routes: RouteStep[][] | undefined;
}
