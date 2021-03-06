import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HuevoDialogComponent } from './huevo-dialog/huevo-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Huevos';
  updateTableOnDialogClose: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(HuevoDialogComponent, {
      width: '50vw',
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      console.log('buenass');
      if (resultado === 'save' || resultado === 'update') {
        this.updateTableOnDialogClose = true;
      }
    });
  }
}
