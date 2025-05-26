import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputNumbers: string = '';
  result: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  calculateSum() {
    const numbers = this.inputNumbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) {
      this.error = 'Please enter valid numbers.';
      this.result = null;
      return;
    }

    this.http.post<{ sum: number }>('http://localhost:5000/api/even-sum', numbers).subscribe({
      next: (response) => {
        this.result = response.sum;
        console.log(response);
        this.error = null;
      },
      error: (err) => {
        this.error = err.error || 'An error occurred while calculating the sum.';
        this.result = null;
      }
    });
  }
}