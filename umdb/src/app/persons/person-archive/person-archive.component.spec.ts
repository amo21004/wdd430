import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonArchiveComponent } from './person-archive.component';

describe('PersonArchiveComponent', () => {
  let component: PersonArchiveComponent;
  let fixture: ComponentFixture<PersonArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
