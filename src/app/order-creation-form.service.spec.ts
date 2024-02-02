import { TestBed } from '@angular/core/testing';

import { OrderCreationFormService } from './order-creation-form.service';

describe('OrderCreationFormService', () => {
  let service: OrderCreationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderCreationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
