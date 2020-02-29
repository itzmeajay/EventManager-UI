import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeventcomponentComponent } from './addeventcomponent.component';

describe('AddeventcomponentComponent', () => {
  let component: AddeventcomponentComponent;
  let fixture: ComponentFixture<AddeventcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeventcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeventcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});