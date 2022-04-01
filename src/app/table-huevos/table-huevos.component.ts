import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HuevoDialogComponent } from '../huevo-dialog/huevo-dialog.component';
import { ApiHuevosService } from '../services/api-huevos.service';

@Component({
  selector: 'app-table-huevos',
  templateUrl: './table-huevos.component.html',
  styleUrls: ['./table-huevos.component.sass'],
})
export class TableHuevosComponent implements OnInit, OnChanges {
  @Input() updateTableOnDialogClose!: boolean;

  displayedColumns: string[] = [
    'nombreHuevo',
    'formaHuevo',
    'swagHuevo',
    'bicepsHuevo',
    'fechaHuevo',
    'comentariosHuevo',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private huevoApi: ApiHuevosService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllHuevos();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('SIUAHFUHADF');
    console.log(this.updateTableOnDialogClose.toString());
    if (this.updateTableOnDialogClose == true) {
      this.updateTableOnDialogClose = false;
      console.log('chiiii');
      this.getAllHuevos();
    }
  }

  getAllHuevos() {
    this.huevoApi.getAllHuevos().subscribe({
      next: (respuesta) => {
        this.dataSource = new MatTableDataSource(respuesta);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        alert('No se han podido obtener los huevos guardados');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editHuevo(row: any) {
    const dialogRef = this.dialog.open(HuevoDialogComponent, {
      width: '50vw',
      data: row,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      this.getAllHuevos();
    });
  }
}
