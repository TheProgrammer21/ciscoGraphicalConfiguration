import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration-service.service';

@Component({
  selector: 'app-interface-configuration',
  templateUrl: './interface-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class InterfaceConfigurationComponent implements OnInit {

  constructor(public conf: ConfigurationService) { }

  ngOnInit() {
  }



}
