import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspringDetailComponent } from './hotspring-detail.component';

describe('HotspringDetailComponent', () => {
  let component: HotspringDetailComponent;
  let fixture: ComponentFixture<HotspringDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspringDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
