import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteMarkComponent } from './update-delete-mark.component';

describe('UpdateDeleteMarkComponent', () => {
  let component: UpdateDeleteMarkComponent;
  let fixture: ComponentFixture<UpdateDeleteMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
