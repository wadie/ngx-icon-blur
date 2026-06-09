import { Component, input } from '@angular/core';

@Component({
    selector: 'ngx-icon-blur',
    templateUrl: './ngx-icon-blur.component.html',
    styleUrls: ['./ngx-icon-blur.component.scss'],
})
export class NgxIconBlurComponent {
    readonly source = input('');
    readonly type = input('rounded', { transform: (value: string) => value.toLowerCase() });
    readonly padding = input(5);
    readonly size = input(100);
    readonly name = input('');
}
