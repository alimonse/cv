import {Component} from '@angular/core';
import Swiper, {Autoplay} from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    'assets/slide/img.png',
    'assets/iconos/angular.png'
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


  // Swiper.use([Autoplay]);
  mySwiper: Swiper;
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
        cubeEffect: {
          slideShadows: true,
        },
        autoplay: {
          delay: 5000,
        },
      });
  }
}

