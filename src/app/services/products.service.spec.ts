import { TestBed } from "@angular/core/testing"

import { ProductsService } from "./products.service"
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";

describe("ProductsService", () => {
  let service: ProductsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ]
    })
    service = TestBed.inject(ProductsService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
