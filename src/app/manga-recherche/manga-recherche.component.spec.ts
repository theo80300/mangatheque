import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaRechercheComponent } from './manga-recherche.component';

describe('MangaRechercheComponent', () => {
  let component: MangaRechercheComponent;
  let fixture: ComponentFixture<MangaRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
