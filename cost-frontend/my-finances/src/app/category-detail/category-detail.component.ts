import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.category = history.state.category;
    this.calculateCategoryInfo();
  }

  calculateCategoryInfo(): void {
    // Realiza los cálculos necesarios
    this.category.availableBalance = this.category.limit - this.category.totalSpent;
    this.category.spentPercentage = (this.category.totalSpent / this.category.limit) * 100;
    //this.category.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  goBack(): void {
    this.router.navigate(['/']);
  }  

  confirmDeleteTransaction(transaction: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: '¿Estás seguro de que deseas eliminar esta transacción?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteTransaction(transaction);
      }
    });
  }

  deleteTransaction(transaction: any): void {
    this.apiService.deleteTransaction(transaction.id).subscribe(() => {
      // Actualiza los detalles de la categoría después de eliminar la transacción
      this.category.transactions = this.category.transactions.filter((t: any) => t !== transaction);
    });
  }
  
}