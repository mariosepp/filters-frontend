import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersCreateComponent } from './filters-create.component';

describe('FiltersCreateComponent', () => {
  let component: FiltersCreateComponent;
  let fixture: ComponentFixture<FiltersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
