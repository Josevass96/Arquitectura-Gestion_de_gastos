import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gastos-comunes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gastos-comunes.component.html',
  styleUrls: ['./gastos-comunes.component.scss'],
})
export class GastosComunesComponent implements OnInit {
  gastosComunes: any[] = [];
  mes: number = 0;
  anio: number = 0;
  mostrarLista: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.cargarGastosComunes();
  }

  generarGastosComunes(): void {
    const nuevoGasto = {
      mes: this.mes,
      anio: this.anio,
      valor_pagado: 0,  // Placeholder
      fecha_pago: null,  // Placeholder
      atrasado: false,  // Placeholder
      cod_depto: 'A123',  // Placeholder
      rut: '12345678-9',  // Placeholder
      nombre: 'Juan Pérez',  // Placeholder
      telefono: '987654321',  // Placeholder
    };

    console.log('Nuevo gasto común generado:', nuevoGasto);
    alert('Gasto común creado exitosamente.');

    this.gastosComunes.push(nuevoGasto);
  }

  cargarGastosComunes(): void {
    this.gastosComunes = [
      { mes: 1, anio: 2024, valor_pagado: 15000, fecha_pago: '2024-01-15', atrasado: false, cod_depto: 'A101', rut: '12345678-9', nombre: 'Carlos García', telefono: '998877665' },
      { mes: 2, anio: 2024, valor_pagado: 12000, fecha_pago: '2024-02-12', atrasado: false, cod_depto: 'A102', rut: '98765432-1', nombre: 'Ana Martínez', telefono: '999888777' },
      { mes: 3, anio: 2024, valor_pagado: 18000, fecha_pago: '2024-03-20', atrasado: false, cod_depto: 'A103', rut: '23456789-0', nombre: 'Pedro López', telefono: '966544332' },
    ];
  }

  toggleGastosComunes(): void {
    this.mostrarLista = !this.mostrarLista;
    if (this.mostrarLista) {
      this.cargarGastosComunes();
    }
  }
}
