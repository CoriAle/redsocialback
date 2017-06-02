import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPerfilComponent } from './mini-perfil.component';

describe('MiniPerfilComponent', () => {
  let component: MiniPerfilComponent;
  let fixture: ComponentFixture<MiniPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
