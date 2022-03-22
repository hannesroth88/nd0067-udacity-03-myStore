import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderCreatedComponent } from './cart-order-created.component';

describe('CartOrderCreatedComponent', () => {
  let component: CartOrderCreatedComponent;
  let fixture: ComponentFixture<CartOrderCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrderCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
