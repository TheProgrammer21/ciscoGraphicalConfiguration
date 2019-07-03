import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {

  @Output() edit = new EventEmitter();

  public collapsed: boolean = false;

  ngOnInit() {
  }

  public onEdit(event) {
    event.stopPropagation();
    this.edit.emit(undefined);
  }
}
