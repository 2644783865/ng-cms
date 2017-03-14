import { Directive, ElementRef, Input } from '@angular/core';
import { ContentService } from './../../services/content-service/content.service';
import { ContentCreate } from './../../models/content-create.model';
import { Content } from './../../models/content.model';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth-service/auth.service';

@Directive({ selector: '[ncEditable]' })

export class NcEditableDirective {
    @Input('ncEditable') ncName: string;
    editLink: string;
    contentId: string;
    content: Content;
    foundContent: Content;
    constructor(private element: ElementRef, private contentService: ContentService, private router: Router, private authService: AuthService) {

    }

    ngOnInit() {
        this.foundContent = this.contentService.contentArr.find(c => c.name == this.ncName);
        this.initContent();
    }

    initContent() {
        if (this.authService.isLoggedIn()) {
            if (this.foundContent === undefined) {
                debugger;
                const content = new ContentCreate().deserialize({
                    name: this.ncName,
                    content: this.element.nativeElement.innerHTML,
                    path: this.router.url
                });
                this.contentService.createContent(content).subscribe(res => {
                    this.content = new Content().deserialize(content);
                    this.content.guid = res;
                    this.appendLink();
                });
            } else {
                this.content = this.foundContent;
                this.appendLink();
            }
        } else {
            this.element.nativeElement.innerHTML = this.foundContent.content;
        }
    }

    appendLink() {
        this.editLink = '/admin/edit-content/' + this.content.guid;
        this.element.nativeElement.innerHTML =
            '<a class="edit-link" href="' + this.editLink + '" id="' + this.content.guid + '">' +
            '<i class="fa fa-pencil" style="padding-right: 5px;" aria-hidden="true"></i></a>' +
            this.content.content;

        $('#' + this.content.guid).click(e => {
            e.preventDefault();
            this.router.navigateByUrl($('#' + this.content.guid).attr('href'));
        });

        const foundContent = this.contentService.contentArr.find(c => c.guid === this.content.guid);

        if (foundContent === undefined) {
            this.contentService.contentArr.push(this.content);
        }
    }
}