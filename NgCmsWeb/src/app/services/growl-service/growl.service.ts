import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { getGuid } from '../../helpers/object.helper';
import { MessageModel } from '../../models/message.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GrowlService {
    public messageArr: MessageModel[] = [];

    constructor() {
    }

    showMessage(text: string, type: string) {
        const msg = new MessageModel().deserialize({
            guid: getGuid,
            text: text,
            type: type
        });

        this.messageArr.push(msg);

        // remove message after 5 seconds
        setTimeout(() => {
            this.deleteMsg(msg);
        }, 5000);
    }

    deleteMsg(msg: MessageModel) {
        const index: number = this.messageArr.indexOf(msg);
        if (index !== -1) {
            this.messageArr.splice(index, 1);
        }
    }
}

