/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DireccionComponent } from './Direccion.component';

describe('DireccionComponent', () => {
  let component: DireccionComponent;
  let fixture: ComponentFixture<DireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
