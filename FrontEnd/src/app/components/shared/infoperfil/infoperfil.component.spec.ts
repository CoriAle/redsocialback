import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoperfilComponent } from './infoperfil.component';

describe('InfoperfilComponent', () => {
  let component: InfoperfilComponent;
  let fixture: ComponentFixture<InfoperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
