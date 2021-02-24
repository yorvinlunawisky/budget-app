import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    //Here we want to emit an event.
    this.xButtonClick.emit();
  }
}
