import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlytableComponent } from './monthlytable.component';

describe('MonthlytableComponent', () => {
  let component: MonthlytableComponent;
  let fixture: ComponentFixture<MonthlytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
