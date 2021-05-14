import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFormConfirmComponent } from './video-form-confirm.component';

describe('VideoFormConfirmComponent', () => {
  let component: VideoFormConfirmComponent;
  let fixture: ComponentFixture<VideoFormConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoFormConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFormConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
