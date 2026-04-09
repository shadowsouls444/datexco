import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMision } from './gestion-mision';

describe('GestionMision', () => {
  let component: GestionMision;
  let fixture: ComponentFixture<GestionMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionMision],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionMision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
