import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproPage } from './repro.page';

describe('ReproPage', () => {
  let component: ReproPage;
  let fixture: ComponentFixture<ReproPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReproPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReproPage);
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