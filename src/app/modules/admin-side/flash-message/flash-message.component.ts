import {Component, Inject, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-flash-message',
    templateUrl: './flash-message.component.html',
    styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

    @Input()
    messages: [];

    constructor() {
    }

    ngOnInit(): void {
    }

    clear(message: any): void {
        // @ts-ignore
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}
