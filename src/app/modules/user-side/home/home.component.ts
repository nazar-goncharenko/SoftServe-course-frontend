import { Component, OnInit } from '@angular/core';
import {PhotoDTO} from '../../../shared/interfaces/photo';
import {PhotoService} from '../../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photo: PhotoDTO;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhoto().subscribe(data => this.photo = data);
  }
}
