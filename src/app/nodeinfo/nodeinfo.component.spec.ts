import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeinfoComponent } from './nodeinfo.component';

describe('NodeinfoComponent', () => {
  let component: NodeinfoComponent;
  let fixture: ComponentFixture<NodeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
