import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {

  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Input('title') title: string;
  @Input('editable') editable: boolean;

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
