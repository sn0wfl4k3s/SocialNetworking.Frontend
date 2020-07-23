import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoLoginComponent } from './bloco-login.component';

describe('BlocoLoginComponent', () => {
  let component: BlocoLoginComponent;
  let fixture: ComponentFixture<BlocoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
