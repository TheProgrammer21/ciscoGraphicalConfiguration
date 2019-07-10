import { Component, OnInit } from '@angular/core';
import { VlanConfigurationService } from '../vlan-configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vlan-configuration',
  templateUrl: './vlan-configuration.component.html',
  styleUrls: ['../configuration.component.scss']
})
export class VlanConfigurationComponent implements OnInit {

  constructor(private vlanConf: VlanConfigurationService) { }

  ngOnInit() {
    this.vlanConf.init();
  }

  public onCreate(number: number) {
    this.vlanConf.addVlan(number);
  }

  public onDelete(index:number){
    this.vlanConf.deleteVlan(index);
  }

  public onSave() {
    this.vlanConf.save();
  }
}
