import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlocoComponent } from './home-bloco.component';

describe('HomeBlocoComponent', () => {
  let component: HomeBlocoComponent;
  let fixture: ComponentFixture<HomeBlocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
