import { Component, OnInit } from '@angular/core';
import { GeneralConfigurationService } from '../general-configuration.service';

@Component({
  selector: 'app-general-configuration',
  templateUrl: './general-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class GeneralConfigurationComponent implements OnInit {

  constructor(private genConfig: GeneralConfigurationService) { }

  ngOnInit() {
    this.genConfig.initConfig();
  }

  public onSave(): void {
    this.genConfig.saveConfig();
  }

}
