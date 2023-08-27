import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  id = 0;
  name = '';
  limit = 0;

  constructor(private apiService: ApiService) {}

  addCategory() {
    this.apiService.createCategory({
      id: this.id,
      name: this.name,
      limit: this.limit,
    }).subscribe(
      response => {
        // Categoría agregada exitosamente
        this.id = 0; // Limpiar campos
        this.name = '';
        this.limit = 0;
      },
      error => {
        // Manejo de errores
      }
    );
  }
}