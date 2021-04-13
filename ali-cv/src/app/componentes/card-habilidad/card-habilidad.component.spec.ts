import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabilidadComponent } from './card-habilidad.component';

describe('CardHabilidadComponent', () => {
  let component: CardHabilidadComponent;
  let fixture: ComponentFixture<CardHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
