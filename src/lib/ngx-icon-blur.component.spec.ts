import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxIconBlurComponent } from './ngx-icon-blur.component';

describe('NgxIconBlurComponent', () => {
    let component: NgxIconBlurComponent;
    let fixture: ComponentFixture<NgxIconBlurComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NgxIconBlurComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NgxIconBlurComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
