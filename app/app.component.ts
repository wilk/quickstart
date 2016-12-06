import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
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
