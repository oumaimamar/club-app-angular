import { Component } from '@angular/core';


import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  showWeekends = true;
  private eventsSubject = new BehaviorSubject<EventInput[]>([]); // Holds async events
  eventsPromise = this.eventsSubject.asObservable();

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    weekends: this.showWeekends,
    editable: true,
    selectable: true,
    eventClick: this.handleEventClick.bind(this),

    events: (fetchInfo, successCallback) => {
      setTimeout(() => {
        successCallback([
          { title: 'T11', start: new Date(), color: '#007bff' },
          { title: 'T12', start: new Date(), color: '#28a745' },
          { title: 'T13', start: new Date(), color: '#dc3545' },
        ]);
      }, 1000); // Simulate async event fetch
    }
  };

  toggleWeekends() {
    this.showWeekends = !this.showWeekends;
    this.calendarOptions = { ...this.calendarOptions, weekends: this.showWeekends };
  }

  handleEventClick(eventInfo: any) {
    alert(`Event: ${eventInfo.event.title}`);
  }
}
