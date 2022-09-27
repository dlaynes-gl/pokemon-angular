import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {

  @Input() label = 'Submit'

  @Input() testId?: string;

  @Output() clicked = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit(true);
  }

}
