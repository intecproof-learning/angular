import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';
import { Router } from '@angular/router';
import { Icontacto } from '../icontacto';

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
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  get form() {
    return this._form.controls;
  }

  submit() {
    console.log(this._form.value);
    this.service.create(this._form.value).subscribe((res: any) => {
      console.log('Elemento creado');
      this.router.navigateByUrl('contacto/index');
    });
  }

}
