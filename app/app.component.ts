import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Hero List</h1>
<input #text type="text" (change)="onChange(text.value)"/>
<my-hero-list [filters]="filters"></my-hero-list>
`
})
export class AppComponent  {
  filters: {
    term: string
  }
  
  constructor() {
    this.filters = {term: ''}
  }
  
  onChange(term: string) {
    this.filters = {term: term}
  }
}
