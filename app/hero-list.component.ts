import {Component} from '@angular/core'
import {IHero} from './interfaces'

@Component({
    selector: 'hero-list',
    template: `
<ul>
    <li><hero-detail [hero]="heros[0]"></hero-detail></li>
    <li><hero-detail [hero]="heros[1]"></hero-detail></li>
    <li><hero-detail [hero]="heros[2]"></hero-detail></li>
</ul>
    `
})
export class HeroListComponent {
    private heros: IHero[] = [{name: "Superman"}, {name: "Spiderman"}, {name: "Batman"}]
}