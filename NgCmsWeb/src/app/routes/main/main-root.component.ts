import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from './../../services/page-service/page.service';
import { RouteModel } from './../../models/route.model';
import { PageBaseComponent } from './../../components/page-base/page-base.component';
import { routes } from './main-root.routes';

@Component({
    templateUrl: 'main-root.component.html',
    styleUrls: ['main-root.component.scss'],
})

export class MainRoot {
    constructor(private pageService: PageService, private router: Router, route: ActivatedRoute) {
        debugger;
        console.log(this.pageService.test);


        debugger;
    }

    ngOnInit() {

        // load pages and apply to route-config
        // this.pageService.getPagesWithChildren().subscribe(res => {
        //     let test;
        //     test = this.treeify(res, 'guid', 'parentPageGuid', 'children');
        // });
    }

    treeify(list, idAttr, parentAttr, childrenAttr) {
        if (!idAttr) idAttr = 'guid';
        if (!parentAttr) parentAttr = 'parentPageGuid';
        if (!childrenAttr) childrenAttr = 'children';

        var treeList = [];
        var lookup = {};
        list.forEach(function (obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];
        });
        list.forEach(function (obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(new RouteModel(obj.path, PageBaseComponent, obj.children));
            } else {
                treeList.push(new RouteModel(obj.path, PageBaseComponent, obj.children));
            }
        });
        return treeList;
    };
}
