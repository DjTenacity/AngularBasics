import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFatherComponent } from './product_father.component';

describe('Product_fatherComponent', () => {
  let component: ProductFatherComponent;
  let fixture: ComponentFixture<ProductFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
