import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaRapPage } from './lista-rap.page';
import { waitForAsync } from '@angular/core/testing';

describe('ListaRapPage', () => {
  let component: ListaRapPage;
  let fixture: ComponentFixture<ListaRapPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ListaRapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
