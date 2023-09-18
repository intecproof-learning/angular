import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontacto } from '../icontacto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
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
      nombre: new FormControl(''),
      email: new FormControl(''),
      mensaje: new FormControl(''),
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
    this.contactoService.delete(this.requestID).subscribe((res: any) => {
      console.log('Elemento eliminado');
      this.router.navigateByUrl('contacto/index');
    });
  }
}