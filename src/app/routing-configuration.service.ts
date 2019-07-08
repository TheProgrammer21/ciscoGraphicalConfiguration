import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingConfigurationService {
  public currentConfig;
  private savedConfig = {
    rip: {
      enabled: false,
      version: 1,
      networks: [""],
      passiveInterfaces: [""],
      routeSummerization: true,
      defaultInformationOriginate: false
    }
  };

  constructor(private config: ConfigurationService) { }

  public addNetwork() {
    this.currentConfig.rip.networks.push("");
  }

  public ripEnabled() {
    return this.savedConfig.rip.enabled;
  }

  public addPassiveInterface() {
    if (this.currentConfig.rip.passiveInterfaces == "default") {
      this.currentConfig.rip.passiveInterfaces = [""];
    } else {
      this.currentConfig.rip.passiveInterfaces.push("");
    }
  }

  public removePassiveInterface(index: number) {
    this.currentConfig.rip.passiveInterfaces.splice(index, 1);
  }

  public setPassiveInterfaceDefault() {
    this.currentConfig.rip.passiveInterfaces = "default";
  }

  public removeNetwork(index: number) {
    this.currentConfig.rip.networks.splice(index, 1);
  }

  public initConfig() {
    this.currentConfig = JSON.parse(JSON.stringify(this.savedConfig));
  }

  public saveConfig() {
    this.savedConfig = JSON.parse(JSON.stringify(this.currentConfig));
    this.config.addRoutingConfig(this.savedConfig);
  }

}
