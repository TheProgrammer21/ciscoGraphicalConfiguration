import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration-service.service';
import { Router } from '@angular/router';
import { InterfaceConfigurationService } from '../interface-configuration.service';

@Component({
  selector: 'app-interface-configuration',
  templateUrl: './interface-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class InterfaceConfigurationComponent implements OnInit {

  constructor(public conf: ConfigurationService, private _router: Router, public intConfig: InterfaceConfigurationService) { }

  ngOnInit() {
    this.intConfig.initConfig();
    if (this.intConfig.getInterfaces().length == 0) {
      this.intConfig.addInterface();
    }
  }

  public interfaceConfig = [{}];

  public onAddInterface(): void {
    this.intConfig.addInterface();
    this.interfaceConfig.push({});
  }

  public onRemoveInterface(index: number): void {
    this.intConfig.removeInterface(index);
    this.interfaceConfig.splice(index, 1);
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