import {Pipe, PipeTransform} from '@angular/core'
import {Contact} from "../contact";

@Pipe({
    name: 'starred',
    pure: false
})
export class StarredPipe implements PipeTransform {
    transform(contacts: Contact[], starred: boolean = false): Contact[] {
        if (starred) return contacts.filter(contact => contact.star)
        else return contacts
    }
}