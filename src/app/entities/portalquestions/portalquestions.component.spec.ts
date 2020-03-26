import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalquestionsComponent } from './portalquestions.component';

describe('PortalquestionsComponent', () => {
  let component: PortalquestionsComponent;
  let fixture: ComponentFixture<PortalquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
