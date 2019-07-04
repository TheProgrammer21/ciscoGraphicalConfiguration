import { Component, OnInit } from '@angular/core';
import { InterfaceSelectionsService } from '../interface-selections.service';
import { AvailableInterfacesService } from '../available-interfaces.service';

@Component({
  selector: 'app-interface-selection',
  templateUrl: './interface-selection.component.html',
  styleUrls: ['./interface-selection.component.scss']
})
export class InterfaceSelectionComponent implements OnInit {

  public allInterfaces: string[] = [];

  constructor(private selectedInterface: InterfaceSelectionsService, private interfaces: AvailableInterfacesService) {
  }

  ngOnInit() {
    this.onChangeType(this.interfaces.getTypes()[0]);
  }

  public onChangeType(type: string) {
    this.allInterfaces = this.interfaces.getAllInterfacesOfType(type);
  }
}
