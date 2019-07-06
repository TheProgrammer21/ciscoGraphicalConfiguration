import { Component, OnInit } from '@angular/core';
import { AvailableInterfacesService } from '../available-interfaces.service';
import { Router } from '@angular/router';
import { InterfaceConfigurationService } from '../interface-configuration.service';
import { nextTick } from 'q';
import { resource } from 'selenium-webdriver/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-interface-settings',
  templateUrl: './interface-settings.component.html',
  styleUrls: ['./interface-settings.component.scss']
})
export class InterfaceSettingsComponent implements OnInit {
  public interfaces: { type: string, values: string }[] = [];

  constructor(private avInt: AvailableInterfacesService, private router: Router, private intConfigurations: InterfaceConfigurationService) {
  }

  ngOnInit() {
    this.interfaces = this.avInt.getInterfaces().slice();
  }

  onAddInterface(): void {
    this.interfaces.push({ type: "", values: "" });
  }

  onRemoveInterface(i: number): void {
    let type = this.interfaces[i].type;
    if (this.intConfigurations.getInterfaces().find(e => e.getType() == type) != undefined) { //Dieser Typ ist in Verwendung
      if (confirm("The interface is in use in the interface configuration. When you delete it all interface configurations containing this interface will be removed. Do you still want to delete the interface?")) {
        this.interfaces.splice(i, 1);
      }
    } else {
      this.interfaces.splice(i, 1);
    }
  }

  private findConflicts(): number[] {
    let result: number[] = [];
    let allNeeded = this.intConfigurations.getInterfaces().slice().map((e, i) => { return { value: e.toString(), index: i } });
    //remove duplicates
    allNeeded = allNeeded.filter((element, index) => {
      return allNeeded.findIndex(e => e.value == element.value) == index;
    });
    let allAvailable = [];
    this.interfaces.forEach(e => allAvailable = allAvailable.concat(this.avInt.getAllInterfacesByTypeAndValue(e.type, e.values)));
    allNeeded.forEach(e => {
      if (allAvailable.findIndex(i => i == e.value) == -1) {
        result.push(e.index);
      }
    });
    return result.sort((a, b) => b - a);
  }

  //returns if want to save or not
  private interfaceConfigurationAdaption(): boolean {
    let res = this.findConflicts();
    if (res.length != 0) {
      if (confirm("The interface configuration contains some interfaces that have been configured with interfaces that do no longer exist with these new interface settings. Do you want to adapt these new settings whereas existing interface configurations that conflict will be removed?")) {
        res.forEach(e => this.intConfigurations.removeSavedInterface(e));
        return true;
      }
      return false;
    }
    return true;
  }

  onSave(): void {
    //Todo: validate input
    if (this.interfaceConfigurationAdaption()) {
      this.avInt.setInterfaces(this.interfaces);
      this.router.navigate(["/"]);
    }
  }

  onCancel(): void {
    this.router.navigate(["/"]);
  }
}