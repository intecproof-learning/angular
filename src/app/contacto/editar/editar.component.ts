import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontacto } from '../icontacto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  requestID!: number;
  cRequest!: Icontacto;
  _form!: FormGroup;

  constructor(
    public contactoService: ContactoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestID = this.route.snapshot.params['requestID']
    console.log(this.requestID)

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

    this.contactoService.find(this.requestID).subscribe((data: Icontacto) => {
      console.log(data);
      this.cRequest = data;
    });
  }

  get form() {
    return this._form.controls;
  }

  submit() {
    console.log(this._form.value);
    this.contactoService.update(this.requestID, this._form.value).subscribe((res: any) => {
      console.log('Elemento creado');
      this.router.navigateByUrl('contacto/index');
    });
  }

}
