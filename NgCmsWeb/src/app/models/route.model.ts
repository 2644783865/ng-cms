export class RouteModel {
    constructor(path, component, children){
        this.path = path,
        this.component = component,
        this.children = children
    }
    path: string;
    component: any;
    children: Array<RouteModel>;
}
