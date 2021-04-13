import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-habilidad',
  templateUrl: './card-habilidad.component.html',
  styleUrls: ['./card-habilidad.component.scss']
})
export class CardHabilidadComponent implements OnInit {

  @Input()
  path: string;

  @Input()
  porcentajeSkill: string;

  @Input()
  porcentaje: string;

  @Input()
  colorBarra: string;

  @Input()
  nombreSkill: string;

  constructor() { }

  ngOnInit(): void {
  }

}
