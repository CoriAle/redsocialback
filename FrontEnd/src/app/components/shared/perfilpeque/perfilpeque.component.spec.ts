import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpequeComponent } from './perfilpeque.component';

describe('PerfilpequeComponent', () => {
  let component: PerfilpequeComponent;
  let fixture: ComponentFixture<PerfilpequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilpequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
