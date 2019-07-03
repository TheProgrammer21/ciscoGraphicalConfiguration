import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceConfigurationComponent } from './interface-configuration.component';

describe('InterfaceConfigurationComponent', () => {
  let component: InterfaceConfigurationComponent;
  let fixture: ComponentFixture<InterfaceConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
