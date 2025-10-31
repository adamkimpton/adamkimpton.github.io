import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryService } from '../itinerary-service/itinerary.service';

@Component({
    selector: 'page-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
    // expose signals directly so template can call .days() and .selected()
    days: any;
    selected: any;
    title: any;
    subtitle: any;

    constructor(private itinerary: ItineraryService) {
        this.days = this.itinerary.days;
        this.selected = this.itinerary.selectedIndex;
        this.title = computed(() => this.days()[this.selected()]?.title ?? 'Itinerary');
        this.subtitle = computed(() => this.days()[this.selected()]?.subtitle ?? 'stay');
    }

    prev() {
        const idx = Math.max(0, this.selected() - 1);
        this.itinerary.requestSelectAndScroll(idx);
    }

    next() {
        const idx = Math.min(this.days().length - 1, this.selected() + 1);
        this.itinerary.requestSelectAndScroll(idx);
    }
}
