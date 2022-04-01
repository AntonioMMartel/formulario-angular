import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiHuevosService } from '../services/api-huevos.service';

@Component({
  selector: 'app-table-huevos',
  templateUrl: './table-huevos.component.html',
  styleUrls: ['./table-huevos.component.sass'],
})
export class TableHuevosComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreHuevo',
    'formaHuevo',
    'swagHuevo',
    'bicepsHuevo',
    'fechaHuevo',
    'comentariosHuevo',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private huevoApi: ApiHuevosService) {}

  ngOnInit(): void {
    this.getAllHuevos();
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
}
