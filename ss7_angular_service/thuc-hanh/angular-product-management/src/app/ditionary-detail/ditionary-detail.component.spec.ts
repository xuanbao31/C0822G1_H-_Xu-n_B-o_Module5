import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitionaryDetailComponent } from './ditionary-detail.component';

describe('DitionaryDetailComponent', () => {
  let component: DitionaryDetailComponent;
  let fixture: ComponentFixture<DitionaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitionaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitionaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
