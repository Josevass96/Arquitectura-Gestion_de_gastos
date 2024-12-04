import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-gastos-pendientes',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './listar-gastos-pendientes.component.html',
  styleUrls: ['./listar-gastos-pendientes.component.scss']
})
export class ListarGastosPendientesComponent {
  mes: number = 1;  // Valor por defecto
  anio: number = new Date().getFullYear();  // Año actual por defecto
  codDepto: string = '';  // Código del departamento, inicializado como vacío
  gastosPendientes: any[] = [];  // Inicializado como un arreglo vacío
  gastosAgrupados: any = {};  // Objeto para almacenar los gastos agrupados por CodDepto
  expandedDeptos: Set<string> = new Set(); // Set para manejar el estado expandido de cada departamento

  constructor(private apiService: ApiService) {}

  listarGastosPendientes(): void {
    const parametros = {
      mes: this.mes,
      anio: this.anio,
      codDepto: this.codDepto  // Agregar el código del departamento al filtro
    };
    
    this.apiService.listarGastosPendientes(parametros).subscribe({
      next: (response) => {
        console.log(response);  // Verifica lo que está llegando desde el backend
        if (response.gastos_pendientes) {
          this.gastosPendientes = response.gastos_pendientes;
          this.agruparPorCodDepto();
        } else {
          this.gastosPendientes = [];
          this.gastosAgrupados = {};
        }
      },
      error: (err) => {
        console.error('Error al obtener los gastos pendientes:', err);
        this.gastosPendientes = [];
        this.gastosAgrupados = {};
      }
    });
  }

  // Método para agrupar los gastos por CodDepto
  agruparPorCodDepto(): void {
    this.gastosAgrupados = this.gastosPendientes.reduce((acc, gasto) => {
      const codDepto = gasto.CodDepto;
      if (!acc[codDepto]) {
        acc[codDepto] = [];
      }
      acc[codDepto].push(gasto);
      return acc;
    }, {});
  }

  // Método para manejar el estado de expansión de cada departamento
  toggleExpand(codDepto: string): void {
    if (this.expandedDeptos.has(codDepto)) {
      this.expandedDeptos.delete(codDepto);
    } else {
      this.expandedDeptos.add(codDepto);
    }
  }

  // Método para verificar si un departamento está expandido
  isExpanded(codDepto: string): boolean {
    return this.expandedDeptos.has(codDepto);
  }

  // Método para obtener las claves del objeto (para uso en la plantilla)
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
