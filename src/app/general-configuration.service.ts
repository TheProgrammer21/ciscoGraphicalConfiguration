import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration-service.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralConfigurationService {
  public currentConfig;

  private savedConfig = {
    hostname: "",
    banner: "",
    enableSecret: "",
    passwordEncryption: false,
    cdprun: true,
    history: true,
    historysize: 10
  };

  constructor(private config: ConfigurationService) { }

  public initConfig() {
    this.currentConfig = Object.assign({}, this.savedConfig);
  }

  public saveConfig() {
    this.savedConfig = Object.assign({}, this.currentConfig);
    this.config.addGeneralConfig(this.savedConfig);
  }

  public getSavedConfig() {
    return this.savedConfig;
  }
}
