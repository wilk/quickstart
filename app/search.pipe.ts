import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(heros: {
        id: number,
        name: string,
        age: number
    }[] = [], filters: {term: string}): {
        id: number,
        name: string,
        age: number
    }[] {
        return filters.term.length === 0 ? heros : heros.filter(hero => hero.name.includes(filters.term))
    }
}