import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinonetableComponent } from './allinonetable.component';

describe('AllinonetableComponent', () => {
  let component: AllinonetableComponent;
  let fixture: ComponentFixture<AllinonetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllinonetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinonetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
