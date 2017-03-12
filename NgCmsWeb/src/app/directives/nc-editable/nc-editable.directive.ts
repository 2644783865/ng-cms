import { Directive, ElementRef, Input } from '@angular/core';
import { ContentService } from './../../services/content-service/content.service';
import { ContentCreate } from './../../models/content-create.model';
import { Content } from './../../models/content.model';

@Directive({ selector: '[ncEditable]' })

export class NcEditableDirective {
    @Input('ncEditable') ncName: string;
    editLink: string;
    contentId: string;
    content: Content;

    constructor(private element: ElementRef, private contentService: ContentService) {
    }

    ngOnInit() {
        this.contentService.getContentByName(this.ncName).subscribe(res => {
            if (res === null) {
                const content = new ContentCreate().deserialize({
                    name: this.ncName,
                    content: this.element.nativeElement.innerHTML
                });
                this.contentService.createContent(content).subscribe(res => {
                    this.content = new Content().deserialize(content);
                    this.content.guid = res;
                    this.setContent();
                });
            } else {
                this.content = res
                this.setContent();
            }
        });
    }

    setContent() {
        this.editLink = 'admin/edit-content/' + this.content.guid;
        this.element.nativeElement.innerHTML =
            '<a class="edit-link" href="' + this.editLink + '">' +
            '<i class="fa fa-pencil" style="padding-right: 5px;" aria-hidden="true"></i></a>' +
            this.content.content;
    }
}