import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';

@Injectable({
  providedIn: 'root'
})
export class InterfaceSelectionsService {

  constructor() { }

  private interface: InterfaceSelection;

  public setInterface(int: InterfaceSelection) {
    this.interface = int;
  }

  public getInterface(): InterfaceSelection {
    return this.interface;
  }
}
