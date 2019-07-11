import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';
import { ConfigurationService } from './configuration-service.service';
import { NetworkUtilities } from './network-utilities';

const deepcopy = require('deepcopy');

@Injectable({
  providedIn: 'root'
})
export class InterfaceConfigurationService {

  constructor(private conf: ConfigurationService) { }

  private index: number;

  private currentInterfaces: InterfaceSelection[] = []; //null wenn noch keine Auswahl getroffen wurde
  private savedInterfaces: InterfaceSelection[] = [];
  public currentConf = [];
  private savedConf = [];

  private editSelection = false;

  private emptyConf = {
    ip: "",
    subnetmask: "",
    shutdown: false,
    cdpenable: true,
    ripReceiveVersion: "",
    ripSendVersion: "",
    description: "",
    speed: "auto",
    duplex: "auto",
    mdix: true,
    clockrate: "",
    switchportmode: "access",
    accessVlan: ""
  };

  /**
   * 
   * @param int Das Interface an der Stelle index wird durch den Parameter ersetzt
   */
  public setInterface(int: InterfaceSelection) {
    this.currentInterfaces[this.index] = int;
  }

  public addInterface(): void {
    this.currentInterfaces.push(null);
    this.currentConf.push(this.clone(this.emptyConf));
  }

  public removeInterface(index: number) {
    this.currentInterfaces.splice(index, 1);
    this.currentConf.splice(index, 1);
  }

  public removeSavedInterface(index: number) {
    this.savedInterfaces.splice(index, 1);
    this.savedConf.splice(index, 1);
  }

  public changeInternalType(type: string, internalType: string) {
    this.savedInterfaces.forEach(e => {
      if (e.getType() == type) {
        e.setInternalType(internalType);
      }
    });
  }

  public getInterface(): InterfaceSelection {
    return this.currentInterfaces[this.index];
  }

  public getInterfaces(): InterfaceSelection[] {
    return this.currentInterfaces;
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
      this.currentConf = this.clone(this.savedConf);
      this.currentInterfaces = this.clone(this.savedInterfaces);
    } else {
      this.editSelection = false;
    }
  }

  public saveConfig() {
    //Every interface must have a type and interface set
    this.currentInterfaces.forEach((e, i) => {
      if (e == null) {
        throw new Error("Interface " + (i + 1) + " is not set!");
      }
    });

    this.currentConf.forEach(e => {
      this.validate(e);
    })
    this.savedConf = this.clone(this.currentConf);
    this.savedInterfaces = this.clone(this.currentInterfaces);
    this.conf.addInterfaceConfig(this.currentInterfaces, this.currentConf);
  }

  private validate(c) {
    if (c.ip != "" || c.subnetmask != "") {
      if (c.ip.match(/^\d{1,3}(\.\d{1,3}){3}$/g) != null && c.subnetmask.match(/^\d{1,3}(\.\d{1,3}){3}|\/[1-2][0-9]|\/3[0-2]|\/[1-9]$/g) != null) {
        if (c.subnetmask.match(/^\/[1-2][0-9]|\/3[0-2]|\/[1-9]$/g) != null) {
          c.subnetmask = NetworkUtilities.prefixToSubnetmask(c.subnetmask);
        }
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

  private clone(arr): any {
    let res;
    if (Array.isArray(arr)) {
      res = arr.slice();
      res = res.map(e => {
        if (e instanceof InterfaceSelection) {
          return new InterfaceSelection(e.toString(), e.toString(), e.getInternalType());
        } else {
          return deepcopy(e);
        }
      });
    } else {
      res = deepcopy(arr);
    }
    return res;
  }
}