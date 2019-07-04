import { Component, OnInit, AfterContentInit } from '@angular/core';
import { InterfaceSelectionsService } from '../interface-selections.service';
import { AvailableInterfacesService } from '../available-interfaces.service';
import { InterfaceSelection } from '../interface-selection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-selection',
  templateUrl: './interface-selection.component.html',
  styleUrls: ['./interface-selection.component.scss']
})
export class InterfaceSelectionComponent implements OnInit {

  public allInterfaces: string[] = [];
  public selType: number;
  public selInterface: number;

  constructor(private selectedInterface: InterfaceSelectionsService, private interfaces: AvailableInterfacesService, private router: Router) {
  }

  ngOnInit() {
    //Laden aller Interfaces für den ausgewählten Typ
    if (this.selectedInterface.getInterface() == null) {
      this.selType = 0;
      this.onChangeType(this.interfaces.getTypes()[0]);
      this.selInterface = 0;
    } else {
      this.selType = this.interfaces.getTypes().indexOf(this.selectedInterface.getInterface().getType());
      this.onChangeType(this.interfaces.getTypes()[this.selType]);
      this.selInterface = this.interfaces.getAllInterfacesOfType(this.interfaces.getTypes()[this.selType]).indexOf(this.selectedInterface.getInterface().getStart());
    }
  }

  public onChangeType(type: string) {
    this.selType = this.interfaces.getTypes().indexOf(type);
    this.allInterfaces = this.interfaces.getAllInterfacesOfType(type);
  }

  public onChangeInterfaceSelection(ind: number): void {
    this.selInterface = ind;
  }

  public onSave() {
    this.selectedInterface.setInterface(new InterfaceSelection(this.allInterfaces[this.selInterface], this.allInterfaces[this.selInterface]));
    this.router.navigate(["./interfaces"]);
  }

  public onCancel() {
    this.router.navigate(["./interfaces"]);
  }
}
