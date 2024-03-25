import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tendenciaspage } from './tendencias.page';
import { waitForAsync } from '@angular/core/testing';
describe('Tendenciaspage', () => {
  let component: Tendenciaspage;
  let fixture: ComponentFixture<Tendenciaspage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Tendenciaspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
