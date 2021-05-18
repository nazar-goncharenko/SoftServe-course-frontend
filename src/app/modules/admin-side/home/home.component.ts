import {Component, OnInit, ViewChild} from '@angular/core';
import {AddPhotoComponent} from '@modules/admin-side/add-photo/add-photo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  @ViewChild(AddPhotoComponent) child;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClick() {
    this.child.uploadFile();
  }

}
