import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildEventService } from 'src/app/services/child-event.service';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  @Input() label = 'Submit';

  @Input() testId?: string;

  @Input() eventName: string = '';

  constructor(private eventService: ChildEventService) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("Emiting event", this.eventName);
    if(this.eventName){
      this.eventService.emitChildEvent(this.eventName);
    } else {
      console.warn("No event name was chosen for the button component!")
    }
  }

}
