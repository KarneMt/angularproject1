import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestComponent } from './counter-test.component';

describe('CounterTestComponent', () => {
  let component: CounterTestComponent;
  let fixture: ComponentFixture<CounterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
