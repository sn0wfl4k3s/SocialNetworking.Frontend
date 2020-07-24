import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBlocoComponent } from './register-bloco.component';

describe('RegisterBlocoComponent', () => {
  let component: RegisterBlocoComponent;
  let fixture: ComponentFixture<RegisterBlocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBlocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
