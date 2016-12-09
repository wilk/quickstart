import {Component, OnInit} from '@angular/core'
import {Contact} from '../contact'
import {AgendaService} from "../services/agenda.service";
import Response = ts.server.protocol.Response;

@Component({
    moduleId: module.id,
    selector: 'pa-dashboard',
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
    private currentTab: string = 'all'
    private contacts: Contact[]
    private showModal: boolean = false
    
    constructor(private agenda: AgendaService) {}

    ngOnInit(): void {
        this.agenda.list()
            .subscribe((contacts: Contact[]) => this.contacts = contacts)
    }
    
    onTabClick(tab: string): void {
        this.currentTab = tab
    }

    onClickStar(contact: Contact): void {
        if (contact.star) this.agenda.unstar(contact.id)
        else this.agenda.star(contact.id)
    }

    onAddClick(): void {
        this.showModal = true
    }
}