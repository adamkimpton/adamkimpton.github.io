import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ItineraryService } from '../itinerary-service/itinerary.service';

@Component({
  selector: 'route-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
    @Input() start!: string;
    @Input() end!: string;
    mapURL?: SafeResourceUrl;
    
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=${ItineraryService.API_KEY}&origin=${encodeURIComponent(this.start)}&destination=${encodeURIComponent(this.end)}&mode=transit`;
        this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
}