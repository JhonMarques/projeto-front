import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDeleteComponent } from './cidade-delete.component';

describe('CidadeDeleteComponent', () => {
  let component: CidadeDeleteComponent;
  let fixture: ComponentFixture<CidadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
