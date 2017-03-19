import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { newGuid } from './../../helpers/guid-helper';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ck-editor',
    templateUrl: 'ck-editor.component.html',
    styleUrls: ['ck-editor.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CkEditorComponent),
        multi: true
    }]
})

export class CkEditorComponent implements OnInit, AfterViewInit {
    id: string;
    editor: any;
    _value: any;
    get value(): any { return this._value; };
    @Input() set value(v) {
        if (v !== this._value) {
            this._value = v;
        }
    }
    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();

    constructor() {
        this.id = newGuid();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.editor = window['CKEDITOR']['replace'](this.id);
        this.editor.config.toolbar = 'Standard';

        // init value
        this.editor.setData(this.value);

        this.editor.on('instanceReady', () => {
            this.ready.emit();
        });

        this.editor.on('change', () => {
            const value = this.editor.getData();
            this.change.emit(value);
            this.updateValue(value);
        });

        // add custom styles to editor
        this.editor.config.contentsCss = ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', '/assets/styles/ckeditor.css']
        this.editor.config.allowedContent = true;
    }

    updateValue(value) {
        this.value = value;
        this.onChange(value);
        this.onTouched();
        this.change.emit(value);
    }

    writeValue(value) {
        this._value = value;
        if (this.editor) {
            this.editor.setData(value);
        }
    }
    onChange(_) { }
    onTouched() { }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}
