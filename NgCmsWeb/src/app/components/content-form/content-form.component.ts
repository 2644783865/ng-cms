import { EmitterService } from '../../services/emitter-service/emitter.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ContentService } from './../../services/content-service/content.service';
import { GrowlService } from './../../services/growl-service/growl.service';
import { ContentModel } from './../../models/content.model';
import { ContentUpdateModel } from './../../models/content-update.model';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'content-form',
    templateUrl: 'content-form.component.html',
    styleUrls: ['content-form.component.scss'],
})

export class ContentFormComponent implements OnInit {
    @Input() content: ContentModel;
    @Input() referral: string;
    editedContent: ContentUpdateModel = new ContentUpdateModel();
    constructor(private fb: FormBuilder, private contentService: ContentService,
        private router: Router, private growlService: GrowlService) {
    }

    ngOnInit() {
    }

    save() {
        this.editedContent = new ContentUpdateModel().deserialize(this.content);
        this.contentService.updateContent(this.editedContent).subscribe(res => {
            this.contentService.contentArr[this.contentService.contentArr
                .findIndex(c => c.guid === this.editedContent.guid)] = this.editedContent;
            this.growlService.messageArr.push({ severity: 'success', summary: 'Info Message', detail: 'Saved content' });
            EmitterService.emitter('content_updated').emit(this.editedContent);
            if (this.referral !== undefined) {
                this.router.navigate([this.referral]);
            }
        });
    }

    onChange(value) {
        console.log(value);
    }

    onReady() {
        console.log('ready');
    }
}
