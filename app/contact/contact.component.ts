import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Contact} from "../contact";
import {AgendaService} from "../services/agenda.service";

@Component({
    moduleId: module.id,
    selector: 'pa-contact',
    templateUrl: './contact.html'
})
export class ContactComponent implements OnInit {
    private contact: Contact = {
        name: '',
        email: '',
        country: '',
        address: '',
        mobile: '',
        star: false
    }

    constructor(private route: ActivatedRoute, private agenda: AgendaService) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params['id']) {
                this.contact = this.agenda.get(parseInt(params['id']))
                console.log(this.contact)
            }
        })
    }
    
    onSubmit(contact: Contact): void {
        this.agenda.add(contact)
    }
    
    onRemove(contactId: number): void {
        this.agenda.remove(contactId)
    }
}