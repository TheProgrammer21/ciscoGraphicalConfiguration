import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private globalConfigurationCommands = [];

  constructor() { }

  private commands: string = "";

  private generalCommands: string = "";
  private interfaceCommands: string = "";

  private addCommand(com: string): void {
    this.commands += com + "\n";
  }

  public addGeneralConfig(conf) {
    this.addCommand("enable");
    this.addCommand("configure terminal");

    Object.keys(conf).forEach(e => {
      this.addConfigString(e, conf[e]);
    });
    console.log("General:");
    console.log(this.commands);
    this.generalCommands = this.commands;
    this.commands = "";
  }

  public addInterfaceConfig(interfaces: InterfaceSelection[], configuration: {}[]) {
    interfaces.forEach((e, i) => {
      if (e != null) { //Todo - es darf beim Speichern keines null sein, vorher prüfen!
        this.addCommand(e.getConfigString());
        Object.keys(configuration[i]).forEach(e => {
          this.addConfigString(e, (configuration[i])[e]);
        });
        this.addCommand("exit");
      }
    });
    console.log("Interfaces:");
    console.log(this.commands);
    this.interfaceCommands = this.commands;
    this.commands = "";
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
      case "ipaddress":
        if (value == "") {
          this.addCommand("no ip address");
        } else {
          this.addCommand("ip address " + value);
        }
    }
  }
}
