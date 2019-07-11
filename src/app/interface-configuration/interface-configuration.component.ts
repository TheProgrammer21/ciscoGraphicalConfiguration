import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration-service.service';
import { Router } from '@angular/router';
import { InterfaceConfigurationService } from '../interface-configuration.service';
import { RoutingConfigurationService } from '../routing-configuration.service';
import { AvailableInterfacesService } from '../available-interfaces.service';
import { VlanConfigurationService } from '../vlan-configuration.service';

@Component({
  selector: 'app-interface-configuration',
  templateUrl: './interface-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class InterfaceConfigurationComponent implements OnInit {
  constructor(public conf: ConfigurationService, private _router: Router, public intConfig: InterfaceConfigurationService, private rouConfig: RoutingConfigurationService, private avInterfaces: AvailableInterfacesService, private avVlans: VlanConfigurationService) { }

  ngOnInit() {
    this.intConfig.initConfig();
    if (this.intConfig.getInterfaces().length == 0) {
      this.intConfig.addInterface();
    }
  }

  public interfaceConfig = [{}];
  public speedOptions = ["auto", "100", "1000", "10000"];
  public duplexOptions = ["auto", "half", "full"];
  public switchportModes = ["access", "trunk"];

  public onAddInterface(): void {
    this.intConfig.addInterface();
    this.interfaceConfig.push({});
  }

  public onRemoveInterface(index: number): void {
    this.intConfig.removeInterface(index);
    this.interfaceConfig.splice(index, 1);
  }

  public onChangeMDIX(value: boolean, index: number) {
    if (value) {
      if (this.intConfig.currentConf[index].speed != "auto") {
        alert("If you set the speed to anything other than auto mdix might not work!");
      } else if (this.intConfig.currentConf[index].duplex != "auto") {
        alert("If you set duplex to anything other than auto mdix might not work!");
      }
    }
  }

  public onChangeDuplexOrSpeed(index: number, mode: string) { //if it is set to anything other than auto then mdix wouldn't work (warn)
    if (this.intConfig.currentConf[index].mdix) {
      if (mode == "speed" && this.intConfig.currentConf[index].speed != "auto") {
        alert("If speed is set to anything other than 'auto', mdix might not work!");
      } else if (mode == "duplex" && this.intConfig.currentConf[index].duplex != "auto") {
        alert("If duplex is set to anything other than 'auto', mdix might not work!");
      }
    }
  }

  public onRipReceive(type: string, v1: boolean, v2: boolean, i: number) {
    let versions;
    if (v1 && v2) {
      versions = "1 2";
    }
    else if (v1) {
      versions = "1";
    }
    else if (v2) {
      versions = "2";
    } else {
      versions = "";
    }

    if (type == "send") {
      this.intConfig.currentConf[i].ripSendVersion = versions;
    } else if (type == "receive") {
      this.intConfig.currentConf[i].ripReceiveVersion = versions;
    }
  }

  public onEditInterface(index: number) {
    this.intConfig.setIndex(index);
    this._router.navigate(['./interfaceSelection']);
  }

  public onSave(): void {
    try {
      this.intConfig.saveConfig();
      this._router.navigate(['/']);
    } catch (e) {
      alert(e.message);
    }
  }
}