export class RouteConfigModel {
    path: string;
    component: any;
    children: Array<RouteConfigModel>;

    constructor(path, component, children) {
        this.path = path;
        this.component = component;
        this.children = children;
    }
}
