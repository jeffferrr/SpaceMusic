import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RapCPage } from './rap-c.page';

describe('RapCPage', () => {
  let component: RapCPage;
  let fixture: ComponentFixture<RapCPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RapCPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RapCPage);
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