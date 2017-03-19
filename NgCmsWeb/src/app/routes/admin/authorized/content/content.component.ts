import { Component, OnInit } from '@angular/core';
import { PageService } from './../../../../services/page-service/page.service';
import { ContentService } from './../../../../services/content-service/content.service';
import { ContentModel } from './../../../../models/content.model';

@Component({
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})

export class Content implements OnInit {
    constructor(private pageService: PageService, private contentService: ContentService) {
    }

    ngOnInit() {
    }
}
