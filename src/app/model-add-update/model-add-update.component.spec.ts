import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAddUpdateComponent } from './model-add-update.component';

describe('ModelAddUpdateComponent', () => {
  let component: ModelAddUpdateComponent;
  let fixture: ComponentFixture<ModelAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
