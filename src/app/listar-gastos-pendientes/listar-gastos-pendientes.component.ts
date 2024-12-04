import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-gastos-pendientes',
  standalone: true,  // Este es un componente independiente (standalone)
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './listar-gastos-pendientes.component.html',
  styleUrls: ['./listar-gastos-pendientes.component.scss']
})
export class ListarGastosPendientesComponent {
  mes: number = 1;  // Valor por defecto
  anio: number = new Date().getFullYear();  // Año actual por defecto
  gastosPendientes: any[] = [];  // Inicializado como un arreglo vacío

  constructor() {}

  listarGastosPendientes(): void {
    // Simulamos la obtención de datos
    this.gastosPendientes = [
      { departamento: 'A101', periodo: '01-2024', monto: 5000 },
      { departamento: 'A102', periodo: '02-2024', monto: 4500 },
      { departamento: 'A103', periodo: '03-2024', monto: 5500 }
    ];
  }
}
