import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsListComponent } from './calls-list.component';

describe('CallsListComponent', () => {
  let component: CallsListComponent;
  let fixture: ComponentFixture<CallsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallsListComponent]
    });
    fixture = TestBed.createComponent(CallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
