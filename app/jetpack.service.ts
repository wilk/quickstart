import {Injectable} from '@angular/core'

@Injectable()
export class JetPackService {
    private rnd: Number = Math.random()*1000
    
    getRnd() {
        return this.rnd 
    }
}