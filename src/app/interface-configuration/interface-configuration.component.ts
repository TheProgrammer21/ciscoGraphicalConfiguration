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

  constructor(public conf: ConfigurationService, private _router: Router, public intSelection: InterfaceSelectionsService) { }

  ngOnInit() {
  }

  public onAddInterface(): void {
    this.intSelection.addInterface();
  }

  public onRemoveInterface(index: number): void {
    this.intSelection.removeInterface(index);
  }

  public onEditInterface(index: number) {
    this.intSelection.setIndex(index);
    this._router.navigate(['./interfaceSelection']);
  }
}