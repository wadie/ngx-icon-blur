import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-icon-blur',
    templateUrl: './ngx-icon-blur.component.html',
    styleUrls: ['./ngx-icon-blur.component.scss'],
})
export class NgxIconBlurComponent implements OnInit {

  @Input() public source: string;
  @Input() public type: string = 'rounded';
  @Input() public padding: number;
  @Input() public size: number;
  @Input() public name: string;

  ngOnInit() {
    this.type = this.type.toLowerCase();
    this.padding = typeof this.padding !== "undefined" ? this.padding : 5;
    this.size = typeof this.size !== "undefined" ? this.size : 100;
  }
}
