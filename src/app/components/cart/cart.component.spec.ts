import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"

import { CartComponent } from "./cart.component"
import { FormsModule } from '@angular/forms';

describe("CartComponent", () => {
  let component: CartComponent
  let fixture: ComponentFixture<CartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [RouterTestingModule, FormsModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
