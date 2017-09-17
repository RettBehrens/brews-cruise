import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspringSearchComponent } from './hotspring-search.component';

describe('HotspringSearchComponent', () => {
  let component: HotspringSearchComponent;
  let fixture: ComponentFixture<HotspringSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspringSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspringSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
