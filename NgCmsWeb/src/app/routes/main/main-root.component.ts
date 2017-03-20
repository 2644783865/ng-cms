import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from './../../services/page-service/page.service';
import { RouteModel } from './../../models/route.model';
import { PageBase2Component } from './../../components/page-base2/page-base2.component';

@Component({
    templateUrl: 'main-root.component.html',
    styleUrls: ['main-root.component.scss'],
})

export class MainRoot {
    constructor(private pageService: PageService, private router: Router, route: ActivatedRoute) {
        debugger;
        route.routeConfig.children = [
            {
                path: 'path2',
                component: PageBase2Component
            }
        ];
        debugger;
    }

    ngOnInit() {
        // load pages and apply to route-config
        this.pageService.getPagesWithChildren().subscribe(res => {
            let test;
            test = this.treeify(res, 'guid', 'parentPageGuid', 'children');

            // let json = [
            //     {
            //         loadChildren: test,
            //         path: ''
            //     },
            //     {
            //         loadChildren: 'app/routes/admin/admin-root.module#AdminRootModule',
            //         path: 'admin'
            //     }
            // ];

            // test.forEach(x => {


            //      this.router.config.push(x)
            //  }
            //  );


            // this.router.resetConfig(this.router.config);
        });
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
