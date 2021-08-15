import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDisableComponent } from './cliente-disable.component';

describe('ClienteDisableComponent', () => {
  let component: ClienteDisableComponent;
  let fixture: ComponentFixture<ClienteDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
