import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuarioMision } from './gestion-usuario-mision';

describe('GestionUsuarioMision', () => {
  let component: GestionUsuarioMision;
  let fixture: ComponentFixture<GestionUsuarioMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUsuarioMision],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionUsuarioMision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
