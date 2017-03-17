import { EmitterService } from '../../../../services/emitter-service/emitter.service';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { PageService } from './../../../../services/page-service/page.service';
import { ContentService } from './../../../../services/content-service/content.service';
import { ContentModel } from './../../../../models/content.model';

@Component({
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})

export class Content implements OnInit {
    data: TreeNode[];
    selectedContent: ContentModel;

    constructor(private pageService: PageService, private contentService: ContentService) {
        this.getPagesWithContent();
    }

    ngOnInit() {
        EmitterService.emitter('content_updated').subscribe(res => {
            this.selectedContent = res;
            const nodeFound = this.findNode(res.guid, this.data[0]);
        });
    }

    findNode(guid, currentNode) {
        let i,
            currentChild,
            result;

        if (guid === currentNode.data.guid) {
            return currentNode;
        } else {
            // Use a for loop instead of forEach to avoid nested functions
            // Otherwise "return" will not work properly
            for (i = 0; i < currentNode.children.length; i += 1) {
                currentChild = currentNode.children[i];

                // Search in the current child
                result = this.findNode(guid, currentChild);

                // Return the result if the node has been found
                if (result !== false) {
                    result.data = this.selectedContent;
                    console.log(result.data);
                    return result;
                }
            }

            // The node has not been found and we have no more options
            return false;
        }
    }

    getPagesWithContent() {
        this.pageService.getPagesWithContent().subscribe(res => {
            this.data = res.data;
        });
    }

    nodeSelect(event) {
        if (event.node.data.guid !== null) {
            EmitterService.emitter('selected_content_changed');
            this.contentService.getContentByGuid(event.node.data.guid).subscribe(res => {
                this.selectedContent = res;
            });
        }
    }

    nodeUnselect(event) {
        console.log(event.node.data);
    }
}
