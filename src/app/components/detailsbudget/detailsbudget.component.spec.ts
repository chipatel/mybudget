import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsbudgetComponent } from './detailsbudget.component';

describe('DetailsbudgetComponent', () => {
  let component: DetailsbudgetComponent;
  let fixture: ComponentFixture<DetailsbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
