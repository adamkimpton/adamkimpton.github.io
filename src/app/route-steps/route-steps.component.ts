import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryService, Place, Route, RouteStep } from '../itinerary-service/itinerary.service';

@Component({
  selector: 'route-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-steps.component.html',
  styleUrls: ['./route-steps.component.css']
})
export class RouteStepsComponent implements OnInit {
  @Input() route!: Route;

  startStation!: Place
  endStation!: Place
  routeSteps!: RouteStep[]

  constructor(private itineraryService: ItineraryService) { }

  async ngOnInit() {
    this.startStation = await this.getPlace(this.itineraryService.getStartStation(this.route.steps))
    this.endStation = await this.getPlace(this.itineraryService.getEndStation(this.route.steps))
  }

  async getPlace(name: string): Promise<Place> {
    // https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Place
    const response = await fetch(`https://places.googleapis.com/v1/places:searchText?key=${ItineraryService.API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": ItineraryService.API_KEY,
        "X-Goog-FieldMask": "places.name,places.id,places.displayName"
      },
      body: JSON.stringify({
        textQuery: name
      })
    });

    const data = await response.json();
    return data.places[0] as Place;
  }
}