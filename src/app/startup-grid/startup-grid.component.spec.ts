import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupGridComponent } from './startup-grid.component';

describe('StartupGridComponent', () => {
  let component: StartupGridComponent;
  let fixture: ComponentFixture<StartupGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
