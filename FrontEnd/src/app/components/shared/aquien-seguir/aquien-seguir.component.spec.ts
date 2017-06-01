import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquienSeguirComponent } from './aquien-seguir.component';

describe('AquienSeguirComponent', () => {
  let component: AquienSeguirComponent;
  let fixture: ComponentFixture<AquienSeguirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquienSeguirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquienSeguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
