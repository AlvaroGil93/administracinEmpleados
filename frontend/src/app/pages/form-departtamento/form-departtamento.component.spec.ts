import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeparttamentoComponent } from './form-departtamento.component';

describe('FormDeparttamentoComponent', () => {
  let component: FormDeparttamentoComponent;
  let fixture: ComponentFixture<FormDeparttamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeparttamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeparttamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
