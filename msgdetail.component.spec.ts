import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgdetailComponent } from './msgdetail.component';

describe('MsgdetailComponent', () => {
  let component: MsgdetailComponent;
  let fixture: ComponentFixture<MsgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
