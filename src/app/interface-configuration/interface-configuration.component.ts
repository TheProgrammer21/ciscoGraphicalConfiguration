import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration-service.service';
import { InterfaceSelection } from '../interface-selection';
import { Router } from '@angular/router';
import { InterfaceSelectionsService } from '../interface-selections.service';

@Component({
  selector: 'app-interface-configuration',
  templateUrl: './interface-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class InterfaceConfigurationComponent implements OnInit {

  public interfaces: InterfaceSelection[] = [null]; //null wenn noch keine Auswahl getroffen wurde

  constructor(public conf: ConfigurationService, private _router: Router, private intSelection: InterfaceSelectionsService) { }

  ngOnInit() {
  }

  public onAddInterface(): void {
    this.interfaces.push(null);
  }

  public onRemoveInterface(index: number): void {
    this.interfaces.splice(index, 1);
  }

  public onEditInterface(index: number) {
    this._router.navigate(['./interfaceSelection']);
    this.intSelection.setInterface(this.interfaces[index]);
  }
}