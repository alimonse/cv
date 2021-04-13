import {AfterViewInit, Component} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

Swiper.use([Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
  ) {}

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  mySwiper: Swiper;

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      cubeEffect: {
        slideShadows: true,
      },
      autoplay: {
        delay: 5000,
      },
      // breakpoints: {
      //   // when window width is >= 320px
      //   320: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //     width: 200
      //   },
      //   // when window width is >= 480px
      //   480: {
      //     slidesPerView: 1,
      //     spaceBetween: 0
      //   },
      //   // when window width is >= 640px
      //   640: {
      //     slidesPerView: 1,
      //     spaceBetween: 50,
      //     width: 400
      //   },
      //   // when window width is >= 640px
      //   1320: {
      //     slidesPerView: 1,
      //     spaceBetween: 150,
      //     width: 400
      //   }
      //
      // }
    });
  }

  title = 'ali-cv';
  value1: string;
  value2: string;

  redesSociales: [{
    nombre: string,
    url: string
  }];

  step = 0;
  setStep;

  imagenesSlide = [
    {
      url: 'https://acaeros-7318f.web.app/',
      path: 'assets/slide/filtros.png'
    },
    {
      url: '',
      path: 'assets/slide/bot_ventas.png'
    },
    {
      url: '',
      path: 'assets/slide/tracking-vendedores.png'
    },
    {
      url: '',
      path: 'assets/slide/gestion-vendedores.png'
    },
    {
      url: '',
      path: 'assets/slide/ficha-kam.png'
    },


  ]


  experiencias = [
    {
    path: 'assets/cards/prototipado.png',
    titulo: 'Prototipado',
    texto:
      'Considero que esta es la base de todo proyecto,' +
      ' me gusta mucho conversar con los clientes, tratar de enterder ' +
      'que necesitan y poder brindarles una solución.',
    herramientas: 'Figma, Invision, Canva',
    },
    {
      path: 'assets/cards/requerimientos.png',
      titulo: 'Análisis de requerimientos',
      texto:
        'Se determina el alcance y la dificultad de el proyecto a realizarse la comunicación' +
        'tanto del cliente como del equipo es fundamental.',
      herramientas: 'Historias de usuario',
    },
    {
      path: 'assets/cards/scrum.png',
      titulo: 'Scrum',
      texto:
        'La planificación es vital, poner metas cortas para llegar a un objetivo mayor,' +
        'adicional a eso la comunicación, saber que se hace y como avanza el proyecto' +
        'motiva a avanzar y finalmente lograrlo.',
      herramientas: 'Scrum',
    },
    {
      path: 'assets/cards/bdd.png',
      titulo: 'Modelado base de datos',
      texto:
        'El modelado de base de datos es el aspecto más importante, antes de empezar el proyecto,' +
        'se debe estructurar la base para que esta facilite la organización de los datos y las consultas' +
        'ademas de definir que tipo de base de datos se necesita.',
      herramientas: 'MySql ',
    },
    {
      path: 'assets/cards/front.png',
      titulo: 'Desarrollo front-end',
      texto:
        'El lado del cliente requiere habilidad tanto en css como html y basicamente tratar' +
        'de estructurar el front en componentes para asi evitar reutilizar código',
      herramientas: 'Angular,Html,Css',
    },
    {
      path: 'assets/cards/back.png',
      titulo: 'Desarrollo back-end',
      texto:
        'El lado del servidor requiere habilidad para solventar la parte de logica de negocio' +
        'haciendo todo el procesamiento desde este lado para facilitar la comunicacion con el front',
      herramientas: 'Nest,redis,restApi',
    },
    {
      path: 'assets/cards/git.png',
      titulo: 'Versionamiento',
      texto:
        'A lo largo del tiempo despues de dañar varios repos poder solventar conflictos se vuelve' +
        'relativamente más facil y el uso de Gitkraken a facilitado eso.',
      herramientas: 'Git',

    },
    {
      path: 'assets/cards/cypress.png',
      titulo: 'Pruebas',
      texto:
        'Todo software debe ser probado varias veces para encontrar bugs y darle cierta calidad' +
        'al desarrollo realizado',
      herramientas: 'Cypress',
    },

  ]


  skills = [
    {
      path: 'assets/iconos/angular.png',
      porcentaje: 'width: 85%',
      colorBarra: 'success',
      nombreSkill: 'ANGULAR',
      porcentajeSkill: '85'
    },
    {
      path: 'assets/iconos/nest.png',
      porcentaje: 'width: 85%',
      colorBarra: 'success',
      nombreSkill: 'NESTJS',
      porcentajeSkill: '85'
    },
    {
      path: 'assets/iconos/java.png',
      porcentaje: 'width: 70%',
      colorBarra: 'warning',
      nombreSkill: 'JAVASCRIPT',
      porcentajeSkill: '70'
    },
    {
      path: 'assets/iconos/typescript.png',
      porcentaje: 'width: 85%',
      colorBarra: 'success',
      nombreSkill: 'TYPESCRIPT',
      porcentajeSkill: '85'
    },
    {
      path: 'assets/iconos/python.png',
      porcentaje: 'width: 50%',
      colorBarra: 'warning',
      nombreSkill: 'PYTHON',
      porcentajeSkill: '50'
    },
    {
      path: 'assets/iconos/node.png',
      porcentaje: 'width: 80%',
      colorBarra: 'success',
      nombreSkill: 'NODE',
      porcentajeSkill: '80'
    },
    {
      path: 'assets/iconos/dialogflow.png',
      porcentaje: 'width: 70%',
      colorBarra: 'success',
      nombreSkill: 'DIALOGFLOW',
      porcentajeSkill: '70'
    },
    {
      path: 'assets/iconos/css.png',
      porcentaje: 'width: 60%',
      colorBarra: 'warning',
      nombreSkill: 'CSS',
      porcentajeSkill: '60'
    },
    {
      path: 'assets/iconos/html.jpg',
      porcentaje: 'width: 85%',
      colorBarra: 'success',
      nombreSkill: 'HTML',
      porcentajeSkill: '85'
    },
    {
      path: 'assets/iconos/figma.png',
      porcentaje: 'width: 70%',
      colorBarra: 'success',
      nombreSkill: 'FIGMA',
      porcentajeSkill: '70'
    },
    {
      path: 'assets/iconos/docker.svg',
      porcentaje: 'width: 60%',
      colorBarra: 'warning',
      nombreSkill: 'DOCKER',
      porcentajeSkill: '60'
    },
    {
      path: 'assets/iconos/mysql.png',
      porcentaje: 'width: 80%',
      colorBarra: 'success',
      nombreSkill: 'MYSQL',
      porcentajeSkill: '80'
    }
  ]




}

