import { Component, OnInit } from '@angular/core';
import { RoutingConfigurationService } from '../routing-configuration.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AvailableInterfacesService } from '../available-interfaces.service';

@Component({
  selector: 'app-routing-configuration',
  templateUrl: './routing-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class RoutingConfigurationComponent implements OnInit {

  constructor(public rouConfig: RoutingConfigurationService, private router: Router, private avInterfaces: AvailableInterfacesService) { }

  ngOnInit() {
    this.rouConfig.initConfig();
  }

  onAddNetwork() {
    this.rouConfig.addNetwork();
  }

  onAddPassiveInterface() {
    this.rouConfig.addPassiveInterface();
  }

  onRemovePassiveInterface(index: number) {
    this.rouConfig.removePassiveInterface(index);
  }

  onRemoveNetwork(index: number) {
    this.rouConfig.removeNetwork(index);
  }

  onDefaultPassive(value) {
    if (value) {
      this.rouConfig.setPassiveInterfaceDefault();
    } else {
      this.rouConfig.addPassiveInterface();
    }
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  public onSave() {
    this.rouConfig.saveConfig();
    this.router.navigate(["/"]);
  }
}
