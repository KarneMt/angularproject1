import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfolgreichComponent } from './erfolgreich.component';

describe('ErfolgreichComponent', () => {
  let component: ErfolgreichComponent;
  let fixture: ComponentFixture<ErfolgreichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErfolgreichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErfolgreichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
