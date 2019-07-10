import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private globalConfigurationCommands = [];

  constructor() { }

  private commands: string = "";

  private generalCommands: string = "";
  private interfaceCommands: string = "";
  private routingCommands: string = "";

  private addCommand(com: string): void {
    this.commands += com + "\n";
  }

  public addGeneralConfig(conf) {
    this.addCommand("enable");
    this.addCommand("configure terminal");

    Object.keys(conf).forEach(e => {
      this.addConfigString(e, conf[e], undefined);
    });
    console.log("General:");
    console.log(this.commands);
    this.generalCommands = this.commands;
    this.commands = "";
  }

  public addInterfaceConfig(interfaces: InterfaceSelection[], configuration: {}[]) {
    interfaces.forEach((el, i) => {
      this.addCommand(el.getConfigString());
      Object.keys(configuration[i]).forEach(e => {
        this.addConfigString(e, (configuration[i])[e], el.getInternalType());
      });
      this.addCommand("exit");
    });
    console.log("Interfaces:");
    console.log(this.commands);
    this.interfaceCommands = this.commands;
    this.commands = "";
  }

  public addRoutingConfig(configuration) {
    if (configuration.rip.enabled) {
      this.addCommand("no router rip"); //removes current configuration
      this.addCommand("router rip");
      Object.keys(configuration.rip).forEach(e => {
        this.addConfigString("rip" + e, configuration.rip[e], undefined);
      });
    } else {
      this.addCommand("no router rip");
    }
    this.addCommand("exit");
    console.log("Routing:");
    console.log(this.commands);
    this.commands = "";
  }

  private addConfigString(key, value, internalType) {
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
        break;
      case "cdprun":
        if (value) {
          this.addCommand("cdp run");
        } else {
          this.addCommand("no cdp run");
        }
        break;
      case "history":
        if (value) {
          this.addCommand("history");
        } else {
          this.addCommand("no history");
        }
        break;
      case "historysize":
        if (value != "") {
          this.addCommand("history size " + value);
        } else {
          this.addCommand("no history size");
        }
        break;
      case "shutdown":
        if (value) {
          this.addCommand("shutdown");
        } else {
          this.addCommand("no shutdown");
        }
        break;
      case "cdpenable":
        if (value) {
          this.addCommand("cdp enable");
        } else {
          this.addCommand("no cdp enable");
        }
        break;
      case "ripversion":
        this.addCommand("version " + value);
        break;
      case "ripnetworks":
        value.forEach(e => {
          this.addCommand("network " + e);
        });
        break;
      case "rippassiveInterfaces":
        if (Array.isArray(value)) {
          value.forEach(e => {
            if (e != "")
              this.addCommand("passive-interface " + e)
          });
        } else {
          this.addCommand("passive-interface default")
        }
        break;
      case "riprouteSummerization":
        if (value) {
          this.addCommand("auto-summary");
        } else {
          this.addCommand("no auto-summary");
        }
        break;
      case "ripReceiveVersion":
        if (value == "") {
          this.addCommand("no ip rip receive version");
        } else {
          this.addCommand("ip rip receive version " + value);
        }
        break;
      case "ripSendVersion":
        if (value == "") {
          this.addCommand("no ip rip send version");
        } else {
          this.addCommand("ip rip send version " + value);
        }
        break;
      case "description":
        if (value == "") {
          this.addCommand("no description");
        } else {
          this.addCommand("description " + value);
        }
        break;
      case "speed":
        if (internalType == "ethernet")
          this.addCommand("speed " + value);
        break;
      case "duplex":
        if (internalType == "ethernet")
          this.addCommand("duplex " + value);
        break;
      case "ripdefaultInformationOriginate":
        if (value) {
          this.addCommand("default-information originate");
        } else {
          this.addCommand("no default-information originate");
        }
        break;
      case "mdix":
        if (internalType == "ethernet")
          if (value)
            this.addCommand("mdix auto");
          else
            this.addCommand("no mdix");
        break;
      case "clockrate":
        if (internalType == "serial")
          if (value == "")
            this.addCommand("no clock rate");
          else
            this.addCommand("clock rate " + value);
    }
  }
}
