import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";
import {Observable} from "rxjs";
import {BannerService} from "../../../../../services/banners.service";

@Component({
  selector: 'app-predefined-categories-settings',
  templateUrl: './predefined-categories-settings.component.html',
  styleUrls: ['./predefined-categories-settings.component.scss']
})
export class PredefinedCategoriesSettingsComponent implements OnInit {

  @Input() predefinedCategories: Observable<SportCategory[]>;
  public selectedCategory: SportCategory;
  @Output() selectedCategoryChanged = new EventEmitter<SportCategory>();
  private predefinedState: String;

  constructor(private bannerService : BannerService) { }

  ngOnInit(): void {
  }

  selectCategoryAt(index: number) {
    this.selectedCategoryChanged.emit(this.predefinedCategories[index]);
  }

  predefinedSetting(category: SportCategory) {
    if (category.showBanners == true) {
      this.predefinedState = "show";
    }
    else {
      this.predefinedState = "hide";
    }
    this.bannerService.predefinedSetting(category, this.predefinedState).subscribe(
        data => console.log(data));
  }

}
