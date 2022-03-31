import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuevoDialogComponent } from './huevo-dialog.component';

describe('HuevoDialogComponent', () => {
  let component: HuevoDialogComponent;
  let fixture: ComponentFixture<HuevoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuevoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuevoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
