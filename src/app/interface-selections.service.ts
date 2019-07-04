import { Injectable } from '@angular/core';
import { InterfaceSelection } from './interface-selection';

@Injectable({
  providedIn: 'root'
})
export class InterfaceSelectionsService {

  constructor() { }

  private index: number;
  private interfaces: InterfaceSelection[] = [null]; //null wenn noch keine Auswahl getroffen wurde

  public setInterface(int: InterfaceSelection) {
    this.interfaces[this.index] = int;
  }

  public addInterface(): void {
    this.interfaces.push(null);
  }

  public removeInterface(index: number) {
    this.interfaces.splice(index, 1);
  }

  public getInterface(): InterfaceSelection {
    return this.interfaces[this.index];
  }

  public getInterfaces(): InterfaceSelection[] {
    return this.interfaces;
  }

  public setIndex(index: number): void {
    this.index = index;
  }
}
