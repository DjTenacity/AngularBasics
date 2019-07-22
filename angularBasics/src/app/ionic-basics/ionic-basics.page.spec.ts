import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicBasicsPage } from './ionic-basics.page';

describe('IonicBasicsPage', () => {
  let component: IonicBasicsPage;
  let fixture: ComponentFixture<IonicBasicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicBasicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicBasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
