import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent {
  description = '';
  category = 0;
  amount = 0;
  date = '';
  ignore = false;

  constructor(private apiService: ApiService) {}

  addTransaction() {
    const transactionData = {
      description: this.description,
      category: this.category,
      amount: this.amount,
      date: this.date,
      ignore: this.ignore,
    };

    this.apiService.createTransaction(transactionData).subscribe(
      response => {
        // Transacción agregada exitosamente
        this.description = '';
        this.category = 0;
        this.amount = 0;
        this.date = '';
        this.ignore = false;
      },
      error => {
        // Manejo de errores
      }
    );
  }
}