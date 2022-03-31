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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(HuevoDialogComponent, {
      width: '33vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
