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
    editedContent: ContentUpdateModel;
    contentForm: FormGroup;

    constructor(private fb: FormBuilder, private contentService: ContentService, private router: Router, private growlService: GrowlService) {
        this.contentForm = this.fb.group({
            content: ['']
        });
    }

    ngOnInit() {
        this.initForm(this.content);

        EmitterService.emitter('selected_content_changed').subscribe(res => {
            this.initForm(res);
            this.content = res;
        });
    }

    initForm(model) {
        this.contentForm = this.fb.group({
            content: [model.content]
        });
    }

    save() {
        this.editedContent = new ContentUpdateModel().deserialize(this.content);
        for (const property in this.contentForm.value) {
            if (this.editedContent.hasOwnProperty(property)) {
                this.editedContent[property] = this.contentForm.value[property];
            }
        }
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
}
