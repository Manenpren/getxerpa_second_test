import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
  name = '';
  limit = 0;

  constructor(private apiService: ApiService) {}

  addCategory() {
    this.apiService.createCategory({
      name: this.name,
      limit: this.limit,
    }).subscribe(
      response => {
        // Categoría agregada exitosamente
        this.name = '';
        this.limit = 0;
      },
      error => {
        // Manejo de errores
      }
    );
  }
}