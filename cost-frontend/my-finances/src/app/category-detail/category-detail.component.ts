import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
    this.router.navigate(['/categories']);
  }  
}