import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdealComponent } from './shopdeal.component';

describe('ShopdealComponent', () => {
  let component: ShopdealComponent;
  let fixture: ComponentFixture<ShopdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
