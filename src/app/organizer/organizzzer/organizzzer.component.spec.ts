import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizzzerComponent } from './organizzzer.component';

describe('OrganizzzerComponent', () => {
  let component: OrganizzzerComponent;
  let fixture: ComponentFixture<OrganizzzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizzzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizzzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
