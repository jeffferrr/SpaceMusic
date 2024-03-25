import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproRanchPage } from './repro-ranch.page';

describe('ReproRanchPage', () => {
  let component: ReproRanchPage;
  let fixture: ComponentFixture<ReproRanchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReproRanchPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReproRanchPage);
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