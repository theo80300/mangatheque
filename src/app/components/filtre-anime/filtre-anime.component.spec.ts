import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreAnimeComponent } from './filtre-anime.component';

describe('FiltreAnimeComponent', () => {
  let component: FiltreAnimeComponent;
  let fixture: ComponentFixture<FiltreAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
