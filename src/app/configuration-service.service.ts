import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private globalConfigurationCommands = [];

  constructor() { }

  private commands: String = "";

  private addCommand(com: String): void {
    this.commands += com + "\n";
  }

  public addGeneralConfig(conf) {
    this.addCommand("enable");
    this.addCommand("configure terminal");

    Object.keys(conf).forEach(e => {
      this.addConfigString(e, conf[e]);
    });
    console.log(this.commands);
  }

  public addInterfaceConfig(conf, int: InterfaceSelection) {
    
  }

  private addConfigString(key, value) {
    let config = "";

    switch (key) {
      case "hostname":
        if (value == "") {
          this.addCommand("hostname " + "Router");
        } else {
          this.addCommand("hostname " + value);
        }
        break;
      case "banner":
        if (value == "") {
          this.addCommand("no banner motd");
        } else {
          this.addCommand("banner motd " + "\\" + value + "\\");
        }
        break;
      case "enableSecret":
        if (value == "") {
          this.addCommand("no enable secret " + value);
        } else {
          this.addCommand("enable secret " + value);
        }
        break;
      case "passwordEncryption":
        if (value) {
          this.addCommand("service password-encryption");
        } else {
          this.addCommand("no service password-encryption");
        }
        break;
    }
  }
}
