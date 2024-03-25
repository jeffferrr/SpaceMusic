import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCristianasPage } from './lista-cristianas.page';
import { waitForAsync } from '@angular/core/testing';

describe('ListaCristianasPage', () => {
  let component: ListaCristianasPage;
  let fixture: ComponentFixture<ListaCristianasPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ListaCristianasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
