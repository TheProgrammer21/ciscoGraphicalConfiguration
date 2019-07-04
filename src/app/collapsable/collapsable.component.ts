import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {

  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  public collapsed: boolean = false;

  ngOnInit() {
  }

  public onEdit(event) {
    event.stopPropagation();
    this.edit.emit(undefined);
  }

  public onRemove(event) {
    event.stopPropagation();
    this.remove.emit(undefined);
  }
}
