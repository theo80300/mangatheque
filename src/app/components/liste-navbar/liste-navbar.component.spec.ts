import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNavbarComponent } from './liste-navbar.component';

describe('ListeNavbarComponent', () => {
  let component: ListeNavbarComponent;
  let fixture: ComponentFixture<ListeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
