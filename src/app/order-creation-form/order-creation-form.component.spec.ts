import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCreationFormComponent } from './order-creation-form.component';

describe('OrderCreationFormComponent', () => {
  let component: OrderCreationFormComponent;
  let fixture: ComponentFixture<OrderCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCreationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
