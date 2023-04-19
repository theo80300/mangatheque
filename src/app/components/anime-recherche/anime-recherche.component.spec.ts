import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRechercheComponent } from './anime-recherche.component';

describe('AnimeRechercheComponent', () => {
  let component: AnimeRechercheComponent;
  let fixture: ComponentFixture<AnimeRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
