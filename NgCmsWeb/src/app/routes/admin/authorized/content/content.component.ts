import { ContentService } from './../../../../services/content-service/content.service';
import { RouteService } from './../../../../services/route-service/route.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'content.component.html',
    styleUrls: ['content.component.scss'],
})

export class Content implements OnInit {
    constructor(private routeService: RouteService, private contentService: ContentService) {
    }

    ngOnInit() {
    }
}
