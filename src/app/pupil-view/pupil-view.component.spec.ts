import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilViewComponent } from './pupil-view.component';

describe('PupilViewComponent', () => {
  let component: PupilViewComponent;
  let fixture: ComponentFixture<PupilViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
