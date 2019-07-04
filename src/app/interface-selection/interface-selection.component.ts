import { Component, OnInit } from '@angular/core';
import { InterfaceSelectionsService } from '../interface-selections.service';

@Component({
  selector: 'app-interface-selection',
  templateUrl: './interface-selection.component.html',
  styleUrls: ['./interface-selection.component.scss']
})
export class InterfaceSelectionComponent implements OnInit {

  constructor(private selectedInterface: InterfaceSelectionsService) { }

  ngOnInit() {
    
  }
}
