import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() prevEnabled = false;

  @Input() nextEnabled = false;

  constructor() { }

  ngOnInit(): void {
  
  }

}
