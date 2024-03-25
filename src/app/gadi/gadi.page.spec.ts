import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GadiPage } from './gadi.page';

describe('GadiPage', () => {
  let component: GadiPage;
  let fixture: ComponentFixture<GadiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GadiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GadiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle isPlaying when togglePlay is called', () => {
    expect(component.isPlaying).toBe(false);
    component.togglePlay();
    expect(component.isPlaying).toBe(true);
    component.togglePlay();
    expect(component.isPlaying).toBe(false);
  });
});