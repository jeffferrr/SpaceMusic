import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproTendenciaPage } from './repro-tendencia.page';

describe('ReproTendenciaPage', () => {
  let component: ReproTendenciaPage;
  let fixture: ComponentFixture<ReproTendenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReproTendenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
