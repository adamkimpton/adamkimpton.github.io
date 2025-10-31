import { Component } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DayCardsComponent } from './day-cards/day-cards.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [PageHeaderComponent, DayCardsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // App root for the itinerary UI
}
