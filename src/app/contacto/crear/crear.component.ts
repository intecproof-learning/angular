import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import { Icontacto } from '../icontacto';
declare function geolocalizar(): void;

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  _form!: FormGroup;

  constructor(public service: ContactoService, private router: Router) { }

  ngOnInit(): void {
    this._form = new FormGroup({
      nombre: new FormControl('', [Validators.required,
      Validators.maxLength(50), Validators.minLength(5)]),
      email: new FormControl('', [Validators.required,
      Validators.maxLength(50), Validators.minLength(5), Validators.email]),
      mensaje: new FormControl('', [Validators.required,
      Validators.maxLength(1000), Validators.minLength(5)]),
      asunto: new FormControl('Sugerencia'),
      contactar: new FormControl(true),
      noticias: new FormControl(false),
      prioridad: new FormControl(4)
    });

    geolocalizar();
  }

  get form() {
    return this._form.controls;
  }

  submit() {
    console.log(this._form.value);
    this.service.create(this._form.value).subscribe((res: any) => {
      alert('Elemento creado')
      console.log('Elemento creado');
      this.router.navigateByUrl('contacto/index');
    });
  }
}