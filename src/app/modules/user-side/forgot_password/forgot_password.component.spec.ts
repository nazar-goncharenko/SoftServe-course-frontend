import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgot_passwordComponent } from './forgot_password.component';

describe('LoginComponent', () => {
  let component: Forgot_passwordComponent;
  let fixture: ComponentFixture<Forgot_passwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgot_passwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgot_passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
