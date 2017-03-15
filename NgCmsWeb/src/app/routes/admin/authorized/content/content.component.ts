import { Component } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { PageService } from './../../../../services/page-service/page.service';

@Component({
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})

export class Content {
    data: TreeNode[];
    constructor(private pageService: PageService) {
        pageService.getPagesWithContent().subscribe(res => {
            this.data = res.data;
        });
    }

    nodeSelect(event) {
        console.log(event.node.data);
    }

    nodeUnselect(event) {
        console.log(event.node.data);
    }
}
