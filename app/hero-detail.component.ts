import {Component, OnInit, Input} from '@angular/core'
import {IHero} from './interfaces'
import {JetPackService} from "./jetpack.service";

@Component({
    selector: 'hero-detail',
    template: `<b>{{hero.name}} - {{rnd}}</b>`,
    providers: [JetPackService]
})
export class HeroDetailComponent implements OnInit {
    @Input()
    private hero: IHero
    private rnd: Number
    
    constructor(private jetpack: JetPackService) {}
    
    ngOnInit() {
        this.rnd = this.jetpack.getRnd()
    }
}