import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';
import { ConfigurationService } from './configuration-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterfaceConfigurationService {

  constructor(private conf: ConfigurationService) {
  }

  private index: number;
  private interfaces: InterfaceSelection[] = []; //null wenn noch keine Auswahl getroffen wurde
  private savedConf = [];
  public currentConf = [];
  private editSelection = false;

  private emptyConf = {
    ip: "",
    subnetmask: ""
  };

  /**
   * 
   * @param int Das Interface an der Stelle index wird durch den Parameter ersetzt
   */
  public setInterface(int: InterfaceSelection) {
    this.interfaces[this.index] = int;
  }

  public addInterface(): void {
    this.interfaces.push(null);
    this.currentConf.push(Object.assign({}, this.emptyConf));
  }

  public removeInterface(index: number) {
    this.interfaces.splice(index, 1);
    this.currentConf.splice(index, 1);
  }

  public getInterface(): InterfaceSelection {
    return this.interfaces[this.index];
  }

  public getInterfaces(): InterfaceSelection[] {
    return this.interfaces;
  }

  public setIndex(index: number): void {
    this.index = index;
    this.editSelection = true;
  }

  public getSavedConf() {
    return this.savedConf;
  }

  public initConfig() {
    if (!this.editSelection) {
      this.currentConf = this.savedConf.slice();
    } else {
      this.editSelection = false;
    }
  }

  public saveConfig() {
    this.currentConf.forEach(e => {
      this.validate(e);
    })
    this.savedConf = this.currentConf.slice();
  }

  private validate(c) {
    if (c.hasOwnProperty('ip') || c.hasOwnProperty('subnetmask')) {
      if (c.ip.match(/^\d{1,3}(\.\d{1,3}){3}$/g) != null && c.subnetmask.match(/^\d{1,3}(\.\d{1,3}){3}|\/[1-2][0-9]|\/3[0-2]|\/[1-9]$/g) != null) {
        c.ipaddress = c.ip + " " + c.subnetmask;
      } else {
        throw new Error("IP address or subnetmask for interface not correctly set!");
      }
    } else {
      c.ipaddress = "";
    }
    delete this.currentConf['ip'];
    delete this.currentConf['subnetmask']
  }
}
