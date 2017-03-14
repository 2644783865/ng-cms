import { NgModule } from '@angular/core';
import { EditContent } from './edit-content.component';
import { ContentFormModule } from './../../../../components/content-form/content-form.module';

@NgModule({
    imports: [ContentFormModule],
    exports: [EditContent],
    declarations: [EditContent],
})

export class EditContentModule { }
