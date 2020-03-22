import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrcComponentComponent } from './vrc-component.component';

describe('VrcComponentComponent', () => {
  let component: VrcComponentComponent;
  let fixture: ComponentFixture<VrcComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrcComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
