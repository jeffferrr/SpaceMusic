import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancionPage } from './cancion.page';
import { waitForAsync } from '@angular/core/testing';

describe('CancionPage', () => {
  let component: CancionPage;
  let fixture: ComponentFixture<CancionPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CancionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
