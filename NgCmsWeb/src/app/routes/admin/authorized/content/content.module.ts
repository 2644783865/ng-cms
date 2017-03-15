import { NgModule } from '@angular/core';
import { Content } from './content.component';
import { TreeTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
    imports: [TreeTableModule, SharedModule],
    exports: [Content],
    declarations: [Content],
})

export class ContentModule { }
