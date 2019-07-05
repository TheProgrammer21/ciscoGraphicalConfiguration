import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration-service.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-general-configuration',
  templateUrl: './general-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class GeneralConfigurationComponent implements OnInit {

  constructor(private conf: ConfigurationService) { }

  ngOnInit() {
  }

  currentConfig = {
    hostname: "",
    banner: "",
    enableSecret: "",
    passwordEncryption: false
  }

  public onSave(): void {
    this.conf.addGeneralConfig(this.currentConfig);
  }

}
