import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableHuevosComponent } from './table-huevos.component';

describe('TableHuevosComponent', () => {
  let component: TableHuevosComponent;
  let fixture: ComponentFixture<TableHuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHuevosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
