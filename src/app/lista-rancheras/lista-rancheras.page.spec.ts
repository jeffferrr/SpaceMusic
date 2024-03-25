import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRancherasPage } from './lista-rancheras.page';
import { waitForAsync } from '@angular/core/testing';
describe('ListaRancherasPage', () => {
  let component: ListaRancherasPage;
  let fixture: ComponentFixture<ListaRancherasPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ListaRancherasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
