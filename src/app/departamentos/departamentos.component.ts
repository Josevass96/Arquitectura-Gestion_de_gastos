import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  standalone: true,  // Este es un componente independiente
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  departamentos: any[] = [];  // Lista de departamentos simulada

  // Datos para un nuevo departamento
  nuevoDepto: any = {
    CodDepto: '',
    Piso: '',
    Numero: '',
    Estado: 'Disponible',
    RutProp: '',
    Arrendado: false,
    RutArre: '',
    FechaIniC: '',
    FechaFinC: '',
    Observacion: '',
    NumHab: 1
  };

  constructor() {}

  ngOnInit(): void {
    // Aquí simulamos la carga de los departamentos (sin backend)
    this.obtenerDepartamentos();  // Simulamos la carga de departamentos al iniciar
  }

  obtenerDepartamentos(): void {
    // Simulación de obtener datos, en este caso usamos un arreglo estático
    this.departamentos = [
      {
        CodDepto: 'A101',
        Piso: '1',
        Numero: '01',
        Estado: 'Disponible',
        RutProp: '12345678-9',
        Arrendado: false,
        RutArre: '',
        FechaIniC: '',
        FechaFinC: '',
        Observacion: '',
        NumHab: 2
      },
      {
        CodDepto: 'A102',
        Piso: '1',
        Numero: '02',
        Estado: 'Arrendado',
        RutProp: '98765432-1',
        Arrendado: true,
        RutArre: '22334455-6',
        FechaIniC: '2023-01-01',
        FechaFinC: '2024-01-01',
        Observacion: 'Contrato vigente',
        NumHab: 3
      }
    ];
  }

  crearDepartamento(): void {
    // Simula la creación de un departamento sin backend
    console.log('Nuevo departamento:', this.nuevoDepto);

    // Agrega el nuevo departamento a la lista
    this.departamentos.push({ ...this.nuevoDepto });

    // Limpiar el formulario
    this.nuevoDepto = {
      CodDepto: '',
      Piso: '',
      Numero: '',
      Estado: 'Disponible',
      RutProp: '',
      Arrendado: false,
      RutArre: '',
      FechaIniC: '',
      FechaFinC: '',
      Observacion: '',
      NumHab: 1
    };
  }
}
