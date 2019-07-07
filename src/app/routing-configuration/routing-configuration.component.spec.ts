import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingConfigurationComponent } from './routing-configuration.component';

describe('RoutingConfigurationComponent', () => {
  let component: RoutingConfigurationComponent;
  let fixture: ComponentFixture<RoutingConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
