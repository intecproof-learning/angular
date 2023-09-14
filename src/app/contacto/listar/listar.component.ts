import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontacto } from '../icontacto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  requestID!: number;
  cRequest!: Icontacto;

  constructor(
    public contactoService: ContactoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestID = this.route.snapshot.params['requestID']
    console.log(this.requestID)

    this.contactoService.find(this.requestID).subscribe((data: Icontacto) => {
      console.log(data);
      this.cRequest = data;
    });
  }
}