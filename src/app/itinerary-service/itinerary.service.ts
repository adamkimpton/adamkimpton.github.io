import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

export interface Day {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  travel?: {
    routes: {
      steps: {
      emoji: string;
      duration: string;
      title: string;
      description: string;
      address?: string;
      }[];
      cost: string;
      duration: string;
    }[];
  };
  activities?: {
    name: string;
    cost?: string;
    duration?: string;
  }[] | [];
}

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  // Itinerary populated from itinerary.md
  readonly days = signal<Day[]>([
    {
      id: 0,
      title: 'Shinjuku, Tokyo',
      subtitle: 'Travel to Shinjuku accommodation',
      date: 'Nov 16',
      travel: {
        routes: [
          {
            steps: [
          { emoji: '🚶', duration: '1-2 mins', title: 'Narita Airport Terminal 1 Station', description: 'Walk 75m to Terminal 1 Station' },
          { emoji: '🚆', duration: '40 mins', title: 'Keisei Takasago Station', description: 'Keisei Narita Skyaccess Access-Tokkyu towards Haneda Airport Terminal 1:2' },
          { emoji: '🚆', duration: '20 mins', title: 'Nippori Station', description: 'Keisei Line Rapid-Limited Express towards Keisei-Ueno' },
          { emoji: '🚶', duration: '3-4 mins', title: 'Nippori Station (Platform 11)', description: 'Walk 85m to Platform 11' },
          { emoji: '🚆', duration: '20 mins', title: 'Shin-Ōkubo Station', description: 'Yamanote Line Local towards For Ikebukuro / Shinjuku' },
              { emoji: '🚶', duration: '4 mins', title: 'Tokyo accommodation', description: "Walk 300m to 'Home in Shinjuku City, Hosted by Naomi' (Airbnb)", address: "1-chōme-16-16 Ōkubo, Shinjuku City, Tokyo 169-0072" }
            ],
            cost: '¥1500',
            duration: '1h30m'
          }
        ]
      },
      activities: [
        { name: 'Check-in at Airbnb' },
      ]
    },
    {
      id: 1,
      title: 'Kamakura',
      subtitle: 'Day trip from Tokyo',
      date: 'Nov 19',
      travel: {
        routes: [
          {
            steps: [
            { emoji: '🚶', duration: '5 mins', title: 'Shin-Ōkubo Station', description: 'Walk 350m to Shin-Ōkubo Station Platform 2' },
            { emoji: '🚆', duration: '22 mins', title: 'Shinagawa Station', description: 'Yamanote Line Local towards For Ikebukuro / Shinjuku' },
            { emoji: '🚶', duration: '3 mins', title: 'Shinagawa Station (Platform 15)', description: 'Walk 220m to Platform 15' },
            { emoji: '🚆', duration: '46 mins', title: 'Kamakura Station', description: 'Yokosuka Line Local towards Kurihama' },
          ],
            cost: '¥950',
            duration: '1h20m'
          },
          {
            steps: [
            { emoji: '🚶', duration: '-', title: 'Kamakura Station (Platform 2)', description: 'Begin at Kamakura Station Platform 2' },
            { emoji: '🚆', duration: '48 mins', title: 'Return to Shinagawa', description: 'Yokosuka Line Local back towards Shinagawa' },
            { emoji: '🚶', duration: '2 mins', title: 'Shinagawa Station (Platform 3)', description: 'Walk 120m to Platform 3' },
            { emoji: '🚆', duration: '5 mins', title: 'Shin-Ōkubo Station', description: 'Yamanote Line Local towards For Shibuya / Shinjuku' },
              { emoji: '🚶', duration: '4 mins', title: 'Tokyo accommodation', description: "Walk 300m to 'Home in Shinjuku City, Hosted by Naomi' (Airbnb)" }
            ],
            cost: '¥950',
            duration: '1h25m'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Kyoto',
      subtitle: 'Travel to Kyoto accommodation',
      date: 'Nov 20',
      travel: {
        routes: [
          {
            steps: [
          { emoji: '🚶', duration: '5 mins', title: 'Shin-Ōkubo Station', description: 'Walk 350m to Shin-Ōkubo Station Platform 2' },
          { emoji: '🚆', duration: '22 mins', title: 'Shinagawa Station', description: 'Yamanote Line Local towards For Shinjuku / Shibuya' },
          { emoji: '🚶', duration: '4 mins', title: 'Shinagawa Station (Platform 24)', description: 'Walk 290m to Shinkansen platforms' },
          { emoji: '🚅', duration: '~2h5m', title: 'Kyoto Station', description: 'Tokaido Shinkansen Nozomi to Kyoto (approx. 2h5m)' },
          { emoji: '🚶', duration: '3 mins', title: 'Kyoto Station (Platform 2)', description: 'Walk 130m to platform for local to Yamashina' },
          { emoji: '🚆', duration: '5 mins', title: 'Yamashina', description: 'Tokaido-Sanyo Line local to Yamashina' },
              { emoji: '🚶', duration: '5 mins', title: 'Kyoto accommodation', description: "Walk 400m to 'House in Kyoto, Hosted by Sao'" }
            ],
            cost: '¥14,170',
            duration: '3h'
          }
        ]
      },
      activities: [
        { name: 'Fushimi Inari Shrine', duration: '1h30m' },
        { name: 'teamLab Biovortex Kyoto', duration: '3h', cost: '¥3400' }
      ]
    },
    {
      id: 3,
      title: 'Osaka',
      subtitle: 'Travel to Osaka accommodation',
      date: 'Nov 22',
      travel: {
        routes: [
          {
        cost: '¥1500',
        duration: '1h30m',
            steps: [
          { emoji: '🚶', duration: '6 mins', title: 'Yamashina Station', description: 'Walk 400m to Yamashina Station' },
          { emoji: '🚆', duration: '34 mins', title: 'Osaka Station', description: 'Tokaido-Sanyo Line Special Rapid towards Osaka' },
          { emoji: '🚶', duration: '1 min', title: 'Osaka Station (Platform 2)', description: 'Walk 50m to platform' },
          { emoji: '🚆', duration: '20 mins', title: 'Teradachō Station', description: 'Osaka Loop / local towards Tennoji / Teradachō' },
              { emoji: '🚶', duration: '4 mins', title: 'Osaka accommodation', description: "Walk 300m to 'Home in Ikuno Ward, Osaka, Hosted by Takeshi'" }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Hiroshima',
      subtitle: 'Day trip from Osaka',
      date: 'Nov 24',
      travel: {
        routes: [
          {
            cost: '¥1500',
            duration: '1h30m',
            steps: [
            { emoji: '🚶', duration: '5 mins', title: 'Teradachō Station', description: 'Walk 300m to Teradachō Station Platform 2' },
            { emoji: '🚆', duration: '2 mins', title: 'Tennōji Station', description: 'Osaka Loop Line Kanku-Rapid towards Tennoji' },
            { emoji: '🚶', duration: '2 mins', title: 'Tennōji Station (Platform 18)', description: 'Walk 50m to platform' },
            { emoji: '🚆', duration: '22 mins', title: 'Shin-Osaka Station', description: 'Haruka Limited Express / local towards Shin-Osaka' },
            { emoji: '🚅', duration: '1h30m', title: 'Hiroshima Station', description: 'Sanyo Shinkansen Nozomi to Hiroshima' },
            ]
          },
          {
            cost: '¥1500',
            duration: '1h30m',
            steps: [
            { emoji: '🚶', duration: '-', title: 'Hiroshima Station (Platform 14)', description: 'Begin and change platforms' },
            { emoji: '🚅', duration: '1h25m', title: 'Return to Shin-Osaka', description: 'Sanyo Shinkansen Mizuho back to Shin-Osaka' },
            { emoji: '🚶', duration: '5 mins', title: 'Shin-Osaka Station (Platform 1)', description: 'Walk 150m to platform' },
            { emoji: '🚆', duration: '6 mins', title: 'Umeda Station', description: 'Midosuji Line local towards Nakamozu' },
            { emoji: '🚶', duration: '4 mins', title: 'Teradachō / Osaka return', description: 'Walk back to accommodation area' }
          ]
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Nara',
      subtitle: 'Day trip from Osaka',
      date: 'Nov 26',
      travel: {
        routes: [
          {
            cost: '¥1500',
            duration: '1h30m',
            steps: [
            { emoji: '🚶', duration: '5 mins', title: 'Teradachō Station', description: 'Walk 300m to Teradachō Station Platform 2' },
            { emoji: '🚆', duration: '2 mins', title: 'Tennōji Station', description: 'Osaka Loop Line Local (Clockwise) to Tennōji' },
            { emoji: '🚶', duration: '1 min', title: 'Tennōji Station (Platform 16)', description: 'Walk 50m to platform' },
              { emoji: '🚆', duration: '34 mins', title: 'Nara Station', description: 'Yamatoji Line Rapid towards Kamo' },
            ]
          },
          {
            cost: '¥1500',
            duration: '1h30m',
            steps: [
            { emoji: '🚶', duration: '-', title: 'Nara Station arrival', description: 'Begin at Nara Station' },
            { emoji: '🚆', duration: '34 mins', title: 'Return to Tennōji', description: 'Yamatoji Line Rapid back to Tennōji' },
            { emoji: '🚶', duration: '1 min', title: 'Tennōji Station (Platform 11)', description: 'Walk 70m to platform' },
            { emoji: '🚆', duration: '2 mins', title: 'Teradachō Station', description: 'Osaka Loop Line Local towards Sakurajima' },
              { emoji: '🚶', duration: '4 mins', title: 'Osaka accommodation', description: "Walk 300m to 'Home in Ikuno Ward, Osaka, Hosted by Takeshi'" }
          ]
          }
        ]
      }
    },
    {
      id: 6,
      title: 'USJ',
      subtitle: 'Universal Studios Japan',
      date: 'Nov 27',
      travel: {
        routes: [{
        cost: '¥1500',
          duration: '1h30m',
          steps: [
          { emoji: '🚶', duration: '5 mins', title: 'Teradachō Station', description: 'Walk 300m to Teradachō Station Platform 1' },
          { emoji: '🚆', duration: '40 mins', title: 'Universal-City Station', description: 'Osaka Loop Line Local towards Sakurajima (to Universal-City)' },
          { emoji: '🚆', duration: '5 mins', title: 'Nishikujō Station', description: 'JR Yumesaki Line Local towards Nishi-Kujo' },
            { emoji: '🚶', duration: '4 mins', title: 'Return to Osaka accommodation', description: "Walk / taxi to 'Home in Ikuno Ward, Osaka, Hosted by Takeshi'" }
          ]
        }]
      }
    },
    {
      id: 7,
      title: 'Shinjuku, Tokyo',
      subtitle: 'Travel to Shinjuku accommodation #2',
      date: 'Nov 28',
      travel: {
        routes: [{
        cost: '¥1500',
        duration: '1h30m',
          steps: [
          { emoji: '🚶', duration: '5 mins', title: 'Teradachō Station', description: 'Walk 300m to Teradachō Station Platform 2' },
          { emoji: '🚆', duration: '1 min', title: 'Tennōji Station', description: 'Osaka Loop Line towards Tennoji' },
          { emoji: '🚶', duration: '2 mins', title: 'Tennōji Station (Platform 2/3)', description: 'Walk 100m to platform' },
          { emoji: '🚆', duration: '22 mins', title: 'Shin-Osaka Station', description: 'Midosuji Line / rapid local towards Shin-Osaka' },
          { emoji: '🚶', duration: '4 mins', title: 'Shin-Osaka Station (Platform 27)', description: 'Walk 160m to platform for Shinkansen' },
          { emoji: '🚅', duration: '2h25m', title: 'Shinagawa Station', description: 'Tokaido Shinkansen Nozomi to Shinagawa/Tokyo (approx. 2h25m)' },
          { emoji: '🚶', duration: '4 mins', title: 'Shinagawa Station (Platform 13)', description: 'Walk to connecting platform' },
          { emoji: '🚆', duration: '11 mins', title: 'Bakurochō / Shinjuku-sanchome', description: 'Local connections towards Shinjuku-sanchome' },
            { emoji: '🚶', duration: '5 mins', title: 'Tokyo accommodation #2', description: "Walk 350m to 'Via Inn Shinjuku' (Hotel)" }
          ]
        }]
      }
    },
    {
      id: 8,
      title: 'Narita Airport',
      subtitle: 'Travel to Narita Airport Terminal 1',
      date: 'Dec 1',
      travel: {
        routes: [{
        cost: '¥1500',
        duration: '1h30m',
          steps: [
          { emoji: '🚶', duration: '6 mins', title: 'Shinjuku-sanchome Station', description: 'Walk 350m to Shinjuku-sanchome Station Platform 2' },
          { emoji: '🚆', duration: '15 mins', title: 'Bakuroyokoyama Station', description: 'Shinjuku Line Local towards Motoyawata' },
          { emoji: '🚶', duration: '2 mins', title: 'Higashi-Nihombashi Station (Platform 2)', description: 'Walk 180m to platform' },
            { emoji: '🚆', duration: '1h10m', title: 'Narita Airport Terminal 1 Station', description: 'Asakusa Line Access-Tokkyu towards Narita Airport Terminal 1' }
          ]
        }]
      }
    }
  ]);

  selectedIndex = signal(0);

  // signal used to request the UI scroll a specific index into view
  requestScroll = signal<number | null>(null);
  // fallback Subject to request scrolls (for components that prefer subscription style)
  readonly scrollRequests = new Subject<number>();

  setSelected(index: number) {
    this.selectedIndex.set(index);
  }

  // set selection and request the UI to scroll that item into view
  requestSelectAndScroll(index: number) {
    this.selectedIndex.set(index);
    this.requestScroll.set(index);
    // also emit on the Subject so subscribers will receive the request
    try {
      this.scrollRequests.next(index);
    } catch (e) {
      // best-effort
    }
  }

  get selectedDay() {
    return () => this.days()[this.selectedIndex()];
  }
}
