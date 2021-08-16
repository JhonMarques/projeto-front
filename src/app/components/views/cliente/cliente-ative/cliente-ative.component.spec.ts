import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAtiveComponent } from './cliente-ative.component';

describe('ClienteAtiveComponent', () => {
  let component: ClienteAtiveComponent;
  let fixture: ComponentFixture<ClienteAtiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAtiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAtiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
