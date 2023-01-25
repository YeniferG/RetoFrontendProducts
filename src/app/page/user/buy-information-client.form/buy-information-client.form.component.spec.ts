import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyInformationClientFormComponent } from './buy-information-client.form.component';

describe('BuyInformationClientFormComponent', () => {
  let component: BuyInformationClientFormComponent;
  let fixture: ComponentFixture<BuyInformationClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyInformationClientFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyInformationClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
