import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() predefinedCategory: SportCategory;
  @Output() categoryChange: EventEmitter<SportCategory> = new EventEmitter<SportCategory>();

  constructor() { }

  ngOnInit(): void {
  }

  categoryChanged() {
    this.categoryChange.emit(this.predefinedCategory);
  }

}
