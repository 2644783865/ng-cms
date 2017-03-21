import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PageService } from './../services/page-service/page.service';

@Injectable()
export class PageResolve implements Resolve<any> {

  constructor(private pageService: PageService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.pageService.getPagesWithChildren();
  }
}

// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
// import { PageService } from './../services/page-service/page.service';

// @Injectable()
// export class PageResolve {

//   constructor(private pageService: PageService, private router: Router) { }

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
//     return new Promise(resolve => {

//       this.pageService.getPagesWithChildren()
//       .subscribe(res => {
//           this.router.resetConfig(this.constructAppRoutes(res));
//           this.router.navigateByUrl(state.url);
//         });
//     });
//   }

//   private constructAppRoutes(res) {
//     // construct routes
//     return this.router.config;
//   }
// }


