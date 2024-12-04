import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marcar-como-pagado',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './marcar-como-pagado.component.html',
  styleUrls: ['./marcar-como-pagado.component.scss']
})
export class MarcarComoPagadoComponent {

  CodDepto: string = '';
  mes: number = 1;
  anio: number = 2024;
  fecha_pago: string = '';

  mensaje: string = '';
  error: string = '';

  constructor() {}

  marcarComoPagado() {
    const pagoData = {
      CodDepto: this.CodDepto,
      mes: this.mes,
      anio: this.anio,
      fecha_pago: this.fecha_pago
    };

    console.log('Pago procesado:', pagoData);

    this.mensaje = `El pago para el departamento ${this.CodDepto} del mes ${this.mes} de ${this.anio} se ha realizado con éxito. Fecha de pago: ${this.fecha_pago}.`;
    this.error = '';

    this.CodDepto = '';
    this.mes = 1;
    this.anio = 2024;
    this.fecha_pago = '';
  }
}
