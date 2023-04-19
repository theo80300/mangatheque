import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaNavbarComponent } from './manga-navbar.component';

describe('MangaNavbarComponent', () => {
  let component: MangaNavbarComponent;
  let fixture: ComponentFixture<MangaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
