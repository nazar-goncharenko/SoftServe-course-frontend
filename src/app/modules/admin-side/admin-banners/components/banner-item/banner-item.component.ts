import {EventEmitter, Input, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Banner, BannerStatus} from "../../../../../shared/interfaces/banner";
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";
import {BannerService} from "../../../../../services/banners.service";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  @Input() banner: Banner;
  @Output() bannerChange: EventEmitter<Banner> = new EventEmitter<Banner>();
  @Output() bannerDeleted: EventEmitter<void> = new EventEmitter<void>();
  categories : SportCategory[];
  closeResult = '';
  trash = faTrash;

  constructor(private bannerService : BannerService, private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(result => {
      this.deleteBanner(this.banner);
    }, reason => { });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.bannerService.getCategories().subscribe( data =>{
      this.categories = data;
    })
  }

  get statuses() {
    const result = [];
    for (let option in BannerStatus) {
      result.push({key: option, value: BannerStatus[option]});
    }

    return result;
  }

  bannerChanged() {
    this.bannerChange.emit(this.banner);
  }

  compareCategories(cat1, cat2) {
    return cat1.name === cat2.name;
  }

  deleteBanner(banner: Banner){
    this.bannerService.deleteBanner(banner).subscribe(_ => {});
    this.modalService.dismissAll();
    this.bannerDeleted.emit();
  }

}
