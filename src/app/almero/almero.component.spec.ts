/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlmeroComponent } from './almero.component';

describe('AlmeroComponent', () => {
  let component: AlmeroComponent;
  let fixture: ComponentFixture<AlmeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
