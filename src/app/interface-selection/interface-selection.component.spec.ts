import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSelectionComponent } from './interface-selection.component';

describe('InterfaceSelectionComponent', () => {
  let component: InterfaceSelectionComponent;
  let fixture: ComponentFixture<InterfaceSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
