import { Component, OnInit } from '@angular/core';
import { AvailableInterfacesService } from '../available-interfaces.service';

@Component({
  selector: 'app-interface-settings',
  templateUrl: './interface-settings.component.html',
  styleUrls: ['./interface-settings.component.scss']
})
export class InterfaceSettingsComponent implements OnInit {
  public interfaces: { type: string, values: string }[] = [];

  constructor(private avInt: AvailableInterfacesService) {
  }

  ngOnInit() {
    this.interfaces = this.avInt.getInterfaces();
  }

  onAddInterface(): void {
    this.interfaces.push({ type: "", values: "" });
  }

  onRemoveInterface(i: number): void {
    this.interfaces.splice(i, 1);
  }

  onSave(): void {
    //Todo: validate input
    this.avInt.setInterfaces(this.interfaces);
  }
}
