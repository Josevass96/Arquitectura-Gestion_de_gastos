import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Para ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marcar-como-pagado',
  standalone: true,  // Este es un componente independiente (standalone)
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './marcar-como-pagado.component.html',
  styleUrls: ['./marcar-como-pagado.component.scss']
})
export class MarcarComoPagadoComponent {

  // Variables del formulario
  CodDepto: string = '';
  mes: number = 1;
  anio: number = 2024;
  fecha_pago: string = '';

  // Mensajes de error o éxito
  mensaje: string = '';
  error: string = '';

  constructor() {}

  // Método simulado para "marcar como pagado"
  marcarComoPagado() {
    const pagoData = {
      CodDepto: this.CodDepto,
      mes: this.mes,
      anio: this.anio,
      fecha_pago: this.fecha_pago
    };

    // Simulando la respuesta de éxito al "marcar como pagado"
    console.log('Pago procesado:', pagoData);

    // Simulamos que el pago fue exitoso
    this.mensaje = `Pago exitoso para el departamento ${this.CodDepto} del mes ${this.mes} de ${this.anio}. Fecha de pago: ${this.fecha_pago}.`;
    this.error = ''; // Limpiar cualquier mensaje de error

    // Limpiar el formulario después del pago exitoso
    this.CodDepto = '';
    this.mes = 1;
    this.anio = 2024;
    this.fecha_pago = '';
  }
}
