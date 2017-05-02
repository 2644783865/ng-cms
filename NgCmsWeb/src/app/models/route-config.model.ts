export class RouteConfigModel {
    path: string;
    guid: string;
    component: any;
    children: Array<RouteConfigModel>;

    constructor(path, guid, component, children) {
        this.path = path;
        this.guid = guid;
        this.component = component;
        this.children = children;
    }
}
