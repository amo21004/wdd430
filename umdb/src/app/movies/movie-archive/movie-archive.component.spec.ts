import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieArchiveComponent } from './movie-archive.component';

describe('MovieArchiveComponent', () => {
  let component: MovieArchiveComponent;
  let fixture: ComponentFixture<MovieArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
