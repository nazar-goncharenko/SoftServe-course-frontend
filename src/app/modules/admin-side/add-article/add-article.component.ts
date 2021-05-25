import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '@services/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SportCategoryService } from '@services/sportCategory.service';
import {AppConstants} from '@shared/app.constants';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  formGroup: FormGroup;
  categories = ['Not Selected'];

  constructor(public fb: FormBuilder,
              private articleService: ArticleService,
              private categoryService: SportCategoryService) {
    this.createForm();
  }

  get f() {
      return this.formGroup.controls;
  }

  private createForm(): void {
    this.formGroup = this.fb.group(
          {
            file: [null],
            // category: ['', Validators.required],
            altImgName: ['', [Validators.required]],
            title: ['', [Validators.required]],
            caption: ['', [Validators.required]],
            description: ['', [Validators.required]],
            showComments: [''],
        }
    );
  }

  onFileChange(event): void {
      if (event.target.files && event.target.files.length) {
          const uploadedFile = event.target.files[0];

          this.formGroup.patchValue({
              file: uploadedFile
          });
      }
  }

  addArticle(): void {
    const formData: FormData = new FormData();
    const file = this.formGroup.get('file').value;

    if (file != null) {
        formData.append('file', file, file.name);
    }
    formData.append('articleDto', JSON.stringify(this.formGroup.value));
    for (const pair of formData.entries()) {
          console.log(pair[0] +  ', ' + pair[1]);
    }
    /*this.articleService.addArticle(formData)
        .subscribe(
            (response) => {
                console.log(response);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );*/
  }

  ngOnInit(): void {
      this.categoryService.getNullParent().subscribe(data => {
          for (const i of data) {
              this.categories.push(i.name);
          }
      });
  }

}
