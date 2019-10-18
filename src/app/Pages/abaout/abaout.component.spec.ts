/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbaoutComponent } from './abaout.component';

describe('AbaoutComponent', () => {
  let component: AbaoutComponent;
  let fixture: ComponentFixture<AbaoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
