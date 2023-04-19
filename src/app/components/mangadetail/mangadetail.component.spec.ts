import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangadetailComponent } from './mangadetail.component';

describe('MangadetailComponent', () => {
  let component: MangadetailComponent;
  let fixture: ComponentFixture<MangadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangadetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
