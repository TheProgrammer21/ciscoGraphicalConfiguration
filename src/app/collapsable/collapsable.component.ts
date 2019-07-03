import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {

  constructor() { }

  public collapsed: boolean = false;

  ngOnInit() {
  }

  public onEdit(event){
    event.stopPropagation();
  }
}
