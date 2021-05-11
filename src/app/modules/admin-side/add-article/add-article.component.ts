import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '@services/article.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder, private articleService: ArticleService) {
    this.createForm();
  }

    private createForm(): void {
      this.formGroup = this.fb.group(
          {
              title: ['', [Validators.required]],
              description: ['', [Validators.required]],
              file: [null]
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

    this.articleService.addArticle(formData)
        .subscribe(
            (response) => console.log(response),
            (error: HttpErrorResponse) => console.log(error)
        );
  }

  ngOnInit(): void {
  }

}
