import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrdersComponent } from './track-orders.component';

describe('TrackOrdersComponent', () => {
  let component: TrackOrdersComponent;
  let fixture: ComponentFixture<TrackOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackOrdersComponent]
    });
    fixture = TestBed.createComponent(TrackOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
