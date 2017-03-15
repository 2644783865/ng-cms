import { EmitterService } from '../../../../services/emitter-service/emitter.service';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { PageService } from './../../../../services/page-service/page.service';
import { ContentService } from './../../../../services/content-service/content.service';
import { ContentModel } from './../../../../models/content.model';

@Component({
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})

export class Content {
    data: TreeNode[];
    selectedContent: ContentModel;
    constructor(private pageService: PageService, private contentService: ContentService) {
        pageService.getPagesWithContent().subscribe(res => {
            this.data = res.data;
        });
    }

    nodeSelect(event) {
        this.contentService.getContentByGuid(event.node.data.guid).subscribe(res => {
            if (this.selectedContent !== undefined) {
                EmitterService.emitter('selected_content_changed').emit(res);
            } else {
                this.selectedContent = res;
            }
        });
    }

    nodeUnselect(event) {
        console.log(event.node.data);
    }
}
