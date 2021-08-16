import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReadDisableComponent } from './cliente-read-disable.component';

describe('ClienteReadDisableComponent', () => {
  let component: ClienteReadDisableComponent;
  let fixture: ComponentFixture<ClienteReadDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteReadDisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReadDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
