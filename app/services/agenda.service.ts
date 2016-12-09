import {Injectable} from '@angular/core'
import {Contact} from "../contact";

@Injectable()
export class AgendaService {
    private _contacts: Contact[] = []

    constructor() {
        this._contacts = [{
            id: 0,
            name: 'foo',
            address: '9th street',
            country: 'USA',
            email: 'foo@bar.com',
            mobile: '28310850183'
        }, {
            id: 1,
            name: 'bar',
            address: '15th street',
            country: 'Canada',
            email: 'bar@bar.com',
            mobile: '118820298'
        }, {
            id: 2,
            name: 'zar',
            address: '12th street',
            country: 'Alabama',
            email: 'zar@zar.com',
            mobile: '1235553211'
        }]
    }
    
    get contacts(): Contact[] {
        return this._contacts
    }
    
    get(contactId: number): Contact {
        return this._contacts.find(contact => contact.id === contactId)
    }

    add(contact: Contact): void {
        let index = this._contacts.push(contact)
        contact.id = index
        console.log(contact)
    }
    
    remove(contactId: number): void {
        let index: number = this._contacts.findIndex(contact => contact.id === contactId)
        
        if (index !== -1) this._contacts.splice(index, 1) 
    }

    star(contactId: number): void {
        let contact = this._contacts.find(contact => contact.id === contactId)

        if (contact) contact.star = true
    }

    unstar(contactId: number): void {
        let contact = this._contacts.find(contact => contact.id === contactId)

        if (contact) contact.star = false
    }
}