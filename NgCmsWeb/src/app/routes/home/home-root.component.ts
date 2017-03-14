import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './../../services/content-service/content.service';
import { PageService } from './../../services/page-service/page.service';

@Component({
    templateUrl: 'home-root.component.html',
    styleUrls: ['home-root.component.scss'],
})

export class HomeRoot {
    constructor(private contentService: ContentService, private pageService: PageService, private router: Router) {
        // Get content for page based on route
        this.pageService.getPageByPath(this.router.url).subscribe(res => {
            this.contentService.getContentForPage(res.guid);
        });
    }
}
