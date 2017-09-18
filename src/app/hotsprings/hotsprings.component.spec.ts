import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspringsComponent } from './hotsprings.component';

describe('HotspringsComponent', () => {
  let component: HotspringsComponent;
  let fixture: ComponentFixture<HotspringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
