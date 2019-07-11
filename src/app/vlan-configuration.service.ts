import { Injectable } from '@angular/core';
import { isNumber } from 'util';
import { ConfigurationService } from './configuration-service.service';
const deepcopy = require('deepcopy');

@Injectable({
  providedIn: 'root'
})
export class VlanConfigurationService {

  public currentVlans: { number: number, name: string }[] = [];
  private savedVlans: { number: number, name: string }[] = [];

  constructor(private config: ConfigurationService) { }

  public init() {
    this.currentVlans = this.savedVlans.slice().map(e => {
      return deepcopy(e);
    });
  }

  public addVlan(number: number) {
    let num = parseInt(number + "");
    if (isNaN(num))
      alert("You have to enter a number!");
    else
      if (num >= 1 && num <= 1005)
        if (this.currentVlans.find(e => e.number == number) == undefined)
          this.currentVlans.push({ number: number, name: "" });
        else
          alert("You have already defined that VLAN!");

      else
        alert("The VLAN number has to be between 1 and 1005!");
  }

  public deleteVlan(index: number) {
    this.currentVlans.splice(index, 1);
  }

  public save() {
    this.savedVlans = this.currentVlans.slice().map(e => {
      return deepcopy(e);
    });
    this.config.addVlanConfig(this.savedVlans);
  }

  public getSavedVlans() {
    return this.savedVlans;
  }
}
