import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeReadComponent } from './cidade-read.component';

describe('CidadeReadComponent', () => {
  let component: CidadeReadComponent;
  let fixture: ComponentFixture<CidadeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
