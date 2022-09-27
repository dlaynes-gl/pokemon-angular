import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  data = ''

  @Output() searched = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

  // ngModel doesn't work when running Jasmine...
  onChange(data: string){
    this.data = data;
    this.searched.emit(data);
  }

}
