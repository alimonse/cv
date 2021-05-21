import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-experiencia',
  templateUrl: './card-experiencia.component.html',
  styleUrls: ['./card-experiencia.component.scss']
})
export class CardExperienciaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  texto: string;

  @Input()
  path: string;

  @Input()
  titulo: string;

  @Input()
  herramientas: string;

}
