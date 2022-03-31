import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  huevoForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.huevoForm = this.FormBuilder.group({
      nombreHuevo: ['', Validators.required],
      formaHuevo: ['', Validators.required],
      swagHuevo: ['', Validators.required],
      bicepsHuevo: ['', Validators.required],
      fechaHuevo: ['', Validators.required],
      comentariosHuevo: [''],
    });
  }

  ngOnInit(): void {
    this.huevoForm;
  }

  guardaHuevo() {
    //console.log(this.huevoForm.value);
  }
}
