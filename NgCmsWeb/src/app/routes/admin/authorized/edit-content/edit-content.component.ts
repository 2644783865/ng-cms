import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from './../../../../services/content-service/content.service';
import { GrowlService } from './../../../../services/growl-service/growl.service';
import { ContentModel } from './../../../../models/content.model';

@Component({
    templateUrl: 'edit-content.component.html',
    styleUrls: ['edit-content.component.scss'],
})

export class EditContent implements OnDestroy {
    content: ContentModel;
    constructor(private route: ActivatedRoute, private contentService: ContentService, private growlService: GrowlService) {
        this.content = this.contentService.contentArr.find(c => c.guid === this.route.snapshot.params['guid']);
    }

    ngOnDestroy() {
        this.growlService.messageArr = [];
    }
}
