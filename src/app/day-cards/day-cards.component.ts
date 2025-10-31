import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListComponent } from '../route-list/route-list.component';
import { ItineraryService } from '../itinerary-service/itinerary.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'day-cards',
  standalone: true,
  imports: [CommonModule, RouteListComponent],
  templateUrl: './day-cards.component.html',
  styleUrls: ['./day-cards.component.css']
})
export class DayCardsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('list', { static: true }) listRef!: ElementRef<HTMLDivElement>;

  private observer?: IntersectionObserver;
  private scrollSub?: Subscription;

  // expose signals for template consumption
  days: any;
  selected: any;

  constructor(private itinerary: ItineraryService) {
    this.days = this.itinerary.days;
    this.selected = this.itinerary.selectedIndex;
  }

  ngAfterViewInit() {
    const listEl = this.listRef.nativeElement;
    const cards = () => Array.from(listEl.querySelectorAll('.card')) as HTMLElement[];

    // observe cards and update selected when user scrolls
    this.observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length === 0) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visible[0];
      const idx = cards().indexOf(top.target as HTMLElement);
      if (idx >= 0) this.itinerary.setSelected(idx);
    }, { root: listEl, threshold: [0.25, 0.5, 0.75] });

    cards().forEach(c => this.observer!.observe(c));

    // subscribe to the Subject so prev/next works
    this.scrollSub = this.itinerary.scrollRequests.subscribe((idx) => {
      const cardsNow = cards();
      const el = cardsNow[idx];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    const disposer = (this as any).__disposer;
    if (typeof disposer === 'function') disposer();
    if (this.scrollSub) this.scrollSub.unsubscribe();
  }
}
