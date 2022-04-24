import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarIntegranteComponent } from './mostrar-integrante.component';

describe('MostrarIntegranteComponent', () => {
  let component: MostrarIntegranteComponent;
  let fixture: ComponentFixture<MostrarIntegranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarIntegranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarIntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
