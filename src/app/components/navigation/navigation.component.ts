import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavEvent } from 'src/app/config/constants/events';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() prevEnabled = false;

  @Input() nextEnabled = false;

  prevEvent = NavEvent.clickPrev;

  nextEvent = NavEvent.clickNext;

  constructor() { }

  ngOnInit(): void {
  
  }

}
