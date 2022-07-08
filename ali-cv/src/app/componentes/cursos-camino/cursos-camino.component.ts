import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-cursos-camino',
  templateUrl: './cursos-camino.component.html',
  styleUrls: ['./cursos-camino.component.scss']
})
export class CursosCaminoComponent implements OnInit {

  events: any[];


  constructor() { }

  ngOnInit(): void {

    this.events = [
      {
        status: 'Curso de Computación Básica',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Desarrollo en NodeJS'
      },
      {
        status: 'Git',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Control de versiones'
      },
      {
        status: 'Javascript/Typescript',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Lenguaje de programación'
      },
      {
        status: 'HTML/CSS/SCSS',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Estilos y maquetado'
      },
      {
        status: 'Angular',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Frontend, App web, PWA'
      },
      {
        status: 'NestJS',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Backend con NodeJS, Websockets, Rest API'
      },
      {
        status: 'Docker',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Instancias de bases de datos'
      },
      {
        status: 'Curso de DialogFlow: Programación de Chatbots por voz\n',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Chatbots'
      },
      {
        status: 'Ionic',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Aplicaciones móviles híbridas'
      },
      {
        status: 'Python',
        date: 'TERMINADO',
        icon: PrimeIcons.STAR,
        color: '#FF9800',
        image: 'game-controller.jpg',
        texto: 'Curso básico'
      },
    ];
  }
}
