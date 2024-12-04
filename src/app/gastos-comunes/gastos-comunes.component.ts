import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gastos-comunes',
  imports: [CommonModule, FormsModule,  RouterModule],
  templateUrl: './gastos-comunes.component.html',
  styleUrls: ['./gastos-comunes.component.scss'],
})
export class GastosComunesComponent implements OnInit {
  gastosComunes: any[] = [];
  gastosPorDepartamento: { [key: string]: any[] } = {}; // Agrupados por departamento
  departamentosDesplegados: { [key: string]: boolean } = {}; // Controla el despliegue por departamento
  mes: number = 0;
  anio: number = 0;
  mostrarLista: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerGastosComunes();
  }

  crearGastosComunes(): void {
    // Verificar si ya existen gastos para el año y mes seleccionado
    const gastosExistentes = this.gastosComunes.find(
      (gasto) => gasto.anio === this.anio && (this.mes > 0 ? gasto.mes === this.mes : true)
    );
  
    if (gastosExistentes) {
      alert('Ya existen gastos comunes para este año y mes. No se puede sobrescribir.');
      return; // Si ya existen, no crear los gastos nuevamente
    }
  
    // Si no existen, crear nuevos gastos
    const gasto: any = { anio: this.anio };
    if (this.mes > 0) {
      gasto.mes = this.mes;
    }
  
    this.apiService.createGastosComunes(gasto).subscribe(
      (response) => {
        console.log('Gastos comunes creados con éxito:', response);
        alert(response.mensaje);
        this.obtenerGastosComunes(); // Actualizar lista después de crear
      },
      (error) => {
        console.error('Error al crear los gastos comunes:', error);
        alert('Error al crear los gastos comunes. ' + error.error.message);
      }
    );
  }

  obtenerGastosComunes(): void {
    this.apiService.getGastosComunes().subscribe((data) => {
      this.gastosComunes = data;
      this.agruparGastosPorDepartamento();
    });
  }

  agruparGastosPorDepartamento(): void {
    this.gastosPorDepartamento = {};
    this.departamentosDesplegados = {};

    this.gastosComunes.forEach((gasto) => {
      const codDepto = gasto.cod_depto;
      if (!this.gastosPorDepartamento[codDepto]) {
        this.gastosPorDepartamento[codDepto] = [];
        this.departamentosDesplegados[codDepto] = false; // Inicialmente no desplegado
      }
      this.gastosPorDepartamento[codDepto].push(gasto);
    });
  }

  toggleDepartamento(codDepto: string): void {
    this.departamentosDesplegados[codDepto] = !this.departamentosDesplegados[codDepto];
  }

  toggleGastosComunes(): void {
    this.mostrarLista = !this.mostrarLista;
    if (this.mostrarLista) {
      this.obtenerGastosComunes();
    }
  }

  obtenerKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
