import {AfterViewInit, Component} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private readonly _breakpointObserver: BreakpointObserver,
  ) {}

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  mySwiper: Swiper;

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
      path: 'assets/slide/filtro.png'
    },
    {
      url: '',
      path: 'assets/slide/bot.png'
    },
    {
      url: '',
      path: 'assets/slide/tracking.png'
    },
    {
      url: '',
      path: 'assets/slide/gestion.png'
    },
    {
      url: '',
      path: 'assets/slide/ficha.png'
    },


  ];


  experiencias = [
    {
      path: 'assets/cards/requerimientos.png',
      titulo: 'Análisis de requerimientos',
      texto:
        'Esta fase es la base de todo proyecto,' +
        ' me gusta mucho obtener requerimientos, brindar una solución para diferentes' +
        ' procesos manuales y poder automatizarlos, normalmente ' +
        'se determina el alcance y la dificultad del proyecto a realizarse.',
        herramientas: 'Historias de usuario',
    },
    {
    path: 'assets/cards/prototipado.png',
    titulo: 'Prototipado',
    texto:
      ' Me gusta mucho realizar el maquetado de aplicaciones,' +
      ' además de brindar la facilidad al usuario de ' +
      'entender el sistema mucho antes de que este sea desarrollado.' +
      ' Normalmente realizo mockups de alta fidelidad.',
      herramientas: 'Figma, Invision, Canva',
    },
    {
      path: 'assets/cards/scrum.png',
      titulo: 'Scrum',
      texto:
        'La planificación es vital, poner metas cortas para llegar a un objetivo mayor,' +
        'adicional a eso la comunicación es importante, saber que se hace y cómo avanza el proyecto ' +
        'motiva a avanzar y finalmente lograrlo.',
      herramientas: 'Scrum',
    },
    {
      path: 'assets/cards/bdd.png',
      titulo: 'Modelado base de datos',
      texto:
        'El modelado de base de datos es el aspecto más importante, antes de empezar el proyecto,' +
        'se debe estructurar la base para que esta facilite la organización de los datos y las consultas' +
        ' además de definir qué tipo de base de datos se necesita.',
      herramientas: 'MySql ',
    },
    {
      path: 'assets/cards/back.png',
      titulo: 'Desarrollo back-end',
      texto:
        'El lado del servidor requiere habilidad para solventar la parte de lógica de negocio' +
        ' haciendo todo el procesamiento desde este lado para poder ser mostrado en el front',
      herramientas: 'Nest,redis,restApi',
    },
    {
      path: 'assets/cards/front.png',
      titulo: 'Desarrollo front-end',
      texto:
        'El lado del cliente requiere habilidad tanto en css como html y basicamente tratar' +
        ' de estructurar el front en componentes para asi lograr reutilizar código',
      herramientas: 'Angular,Html,Css',
    },
    {
      path: 'assets/cards/git.png',
      titulo: 'Versionamiento',
      texto:
        'El versionamiento de código es vital, ' +
        'manejar el historico del código.',
      herramientas: 'Git, Gitkraken' ,

    },
    {
      path: 'assets/cards/cypress.png',
      titulo: 'Pruebas',
      texto:
        'Todo software debe ser probado varias veces para encontrar bugs y darle cierta calidad ' +
        'al desarrollo realizado',
      herramientas: 'Cypress',
    },

  ];


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
  ];

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




}

