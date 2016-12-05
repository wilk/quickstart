import {Component, Input} from '@angular/core'

@Component({
    selector: 'my-hero-list',
    template: `
<div *ngFor="let hero of (heros | search:filters)">
    {{hero.id}} - {{hero.name}} it's {{hero.age}}
</div>
    `
})
export class HeroListComponent {
    @Input() filters: {
        term: string
    }
    
    heros = [{
        id: 0,
        name: 'foo',
        age: 15
    }, {
        id: 1,
        name: 'bar',
        age: 24
    }, {
        id: 2,
        name: 'zar',
        age: 35
    }, {
        id: 3,
        name: 'goo',
        age: 65
    }]
    
    constructor() {
        this.filters = {term: ''}
    }
}