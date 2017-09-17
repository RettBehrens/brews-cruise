import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspringsListComponent } from './hotsprings-list.component';

describe('HotspringsListComponent', () => {
  let component: HotspringsListComponent;
  let fixture: ComponentFixture<HotspringsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspringsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspringsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
