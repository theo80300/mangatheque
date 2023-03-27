import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class SearchBarComponent {
  @Output() searchTextChanged = new EventEmitter<string>();

  onInputChange(text: string) {
    this.searchTextChanged.emit(text);
  }
}
