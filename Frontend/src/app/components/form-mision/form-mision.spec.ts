import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMision } from './form-mision';

describe('FormMision', () => {
  let component: FormMision;
  let fixture: ComponentFixture<FormMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMision],
    }).compileComponents();

    fixture = TestBed.createComponent(FormMision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
