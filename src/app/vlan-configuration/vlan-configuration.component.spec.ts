import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlanConfigurationComponent } from './vlan-configuration.component';

describe('VlanConfigurationComponent', () => {
  let component: VlanConfigurationComponent;
  let fixture: ComponentFixture<VlanConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlanConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlanConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
