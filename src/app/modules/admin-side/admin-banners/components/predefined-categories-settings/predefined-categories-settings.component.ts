import {Component, Input, OnInit} from '@angular/core';
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";

@Component({
  selector: 'app-predefined-categories-settings',
  templateUrl: './predefined-categories-settings.component.html',
  styleUrls: ['./predefined-categories-settings.component.scss']
})
export class PredefinedCategoriesSettingsComponent implements OnInit {

  @Input() predefinedCategories: SportCategory[];

  constructor() { }

  ngOnInit(): void {
  }

}
