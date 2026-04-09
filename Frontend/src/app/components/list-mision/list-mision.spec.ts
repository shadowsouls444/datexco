import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMision } from './list-mision';

describe('ListMision', () => {
  let component: ListMision;
  let fixture: ComponentFixture<ListMision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMision],
    }).compileComponents();

    fixture = TestBed.createComponent(ListMision);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
