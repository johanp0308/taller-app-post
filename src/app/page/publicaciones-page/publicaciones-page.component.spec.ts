import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesPageComponent } from './publicaciones-page.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

describe('PublicacionesPageComponent', () => {
  let component: PublicacionesPageComponent;
  let fixture: ComponentFixture<PublicacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicacionesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
