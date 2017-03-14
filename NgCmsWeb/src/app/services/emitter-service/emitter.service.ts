import {Injectable, EventEmitter} from '@angular/core';
@Injectable()

export class EmitterService {
    private static emitters: { [channel: string]: EventEmitter<any> } = {};

    static emitter(channel: string): EventEmitter<any> {
        if (!this.emitters[channel]) {
            this.emitters[channel] = new EventEmitter();
        }
        return this.emitters[channel];
    }
}
