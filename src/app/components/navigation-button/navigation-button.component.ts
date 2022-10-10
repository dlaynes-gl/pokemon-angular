import { Component, Input, OnInit } from '@angular/core';
import { NavEvent } from 'src/app/config/constants/events';
import { NavigationEventService } from 'src/app/services/events/navigation-event.service';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  @Input() label = 'Submit';

  @Input() testId?: string;

  @Input() eventName: NavEvent|null = null;

  @Input() enabled = true;

  constructor(private eventService: NavigationEventService) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Performing click", this.eventName)
    if(this.eventName){
      this.eventService.emitChildEvent(this.eventName);
    } else {
      console.warn("No event name was chosen for the button component!")
    }
  }

}
