import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  transactions: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories() // Asegúrate de tener un método getCategories en tu ApiService
      .subscribe(categories => {
        this.categories = categories;

        // Ahora, para cada categoría, obtenemos sus transacciones y calculamos el total gastado
        this.categories.forEach(category => {
          this.apiService.gettransactions() // Asegúrate de tener un método getTransactionsForCategory en tu ApiService
            .subscribe(transactions => {
              category.transactions = transactions;
              category.totalSpent = this.calculateTotalSpent(category.transactions, category.id);
            });
        });
      });
  }

  calculateTotalSpent(transactions: any[], categoryId: any[]): number {
    const transactionsForCategory = transactions.filter(transaction => transaction.category == categoryId);
    this.transactions = transactionsForCategory
    if (transactionsForCategory && transactionsForCategory.length > 0) {
      const totalSpent = transactionsForCategory.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
      return totalSpent;
    } else {
      return 0;
    }
  }

  getTransactionsForCategoryId(categoryId: number): any[] {
    const category = this.categories.find(category => category.id === categoryId);
    return category ? category.transactions : [];
  }

  viewCategoryDetail(category: any): void {
    this.router.navigateByUrl('/category-detail', { state: { category } });
  }
  
  confirmDelete(category: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: '¿Estás seguro de que deseas eliminar esta categoría?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteCategory(category);
      }
    });
  }

  deleteCategory(category: any): void {
    this.apiService.deleteCategory(category.id).subscribe(() => {
      // Actualiza la lista de categorías después de eliminar
      this.categories = this.categories.filter(c => c !== category);
    });
  }
}