import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrDangKyComponent } from './fomr-dang-ky.component';

describe('FomrDangKyComponent', () => {
  let component: FomrDangKyComponent;
  let fixture: ComponentFixture<FomrDangKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomrDangKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrDangKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
