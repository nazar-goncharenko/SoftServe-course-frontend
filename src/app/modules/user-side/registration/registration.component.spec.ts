import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {RegistrationComponent} from './registration.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let httpClient : HttpClient;
  let httpTestingController : HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ RegistrationComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
