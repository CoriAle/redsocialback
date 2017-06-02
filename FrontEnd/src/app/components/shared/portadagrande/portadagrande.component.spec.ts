import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadagrandeComponent } from './portadagrande.component';

describe('PortadagrandeComponent', () => {
  let component: PortadagrandeComponent;
  let fixture: ComponentFixture<PortadagrandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadagrandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadagrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
