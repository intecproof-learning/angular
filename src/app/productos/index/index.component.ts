import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public postService: ProductoService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Iproducto[]) => {
      console.log(data);
    });
  }

}
