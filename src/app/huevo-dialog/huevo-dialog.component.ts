import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-huevo-dialog',
  templateUrl: './huevo-dialog.component.html',
  styleUrls: ['./huevo-dialog.component.sass'],
})
export class HuevoDialogComponent {
  ganstas = [
    'Chimpancé de feria',
    'Mazo gansta nano',
    'Fleje malote pa',
    'Ciudadano modelo',
    'Persona genérica',
    'Orgulloso alumno de la ulpgc',
    'Yo (Persona extremadamente madura y empática)',
  ];

  constructor() {}
}
