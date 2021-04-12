import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-banner.component.html',
  styleUrls: ['./new-banner.component.scss']
})
export class NewBannerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

}
