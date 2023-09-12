import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';
import { Icontacto } from '../icontacto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  requests: Icontacto[] = []

  constructor(public postService: ContactoService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Icontacto[])=>{
      this.requests = data;
      console.log(this.requests);
    });
  }
}
