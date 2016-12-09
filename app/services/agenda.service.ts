import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Contact} from "../contact";
import {Observable} from 'rxjs'
import {ConfigService} from '../services/config.service'
import 'rxjs/add/operator/map'

@Injectable()
export class AgendaService {
    private _contacts: Contact[] = []

    constructor(private http: Http, private config: ConfigService) {
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
    
    list(): Observable<Contact[]> {
        return this.http.get(`${this.config.url}/contacts`)
            .map((res: Response) => res.json())
    }
    
    get(contactId: number): Observable<Contact> {
        return this.http.get(`${this.config.url}/contacts/${contactId}`)
            .map((res: Response) => res.json())
    }

    add(contact: Contact): void {
        contact.id = Math.round((Math.random() * 100000))
        this._contacts.push(contact)
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