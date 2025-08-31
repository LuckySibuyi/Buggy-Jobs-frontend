import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Add New Job</h3>
    <form (ngSubmit)="submitJob()">
      <div>
        <label>Title:</label>
        <input [(ngModel)]="job.title" name="title" required>
      </div>
      <div>
        <label>Description:</label>
        <textarea [(ngModel)]="job.description" name="description"></textarea>
      </div>
      <div>
        <label>Location:</label>
        <input [(ngModel)]="job.location" name="location">
      </div>
      <div>
        <label>Type:</label>
        <input [(ngModel)]="job.type" name="type">
      </div>
      <div>
        <label>Closing Date:</label>
        <input type="date" [(ngModel)]="job.closingDate" name="closingDate" required>
      </div>
      <button type="submit">Add Job</button>
    </form>
  `
})
export class AddJobComponent {
  @Output() jobAdded = new EventEmitter<void>();

  job = {
    title: '',
    description: '',
    location: '',
    type: '',
    closingDate: ''
  };

  constructor(private http: HttpClient) {}

  submitJob() {
    // Validate title and future closing date
    if (!this.job.title) {
      alert('Title is required');
      return;
    }
    if (new Date(this.job.closingDate) <= new Date()) {
      alert('Closing date must be in the future');
      return;
    }

    
    this.http.post('http://localhost:5035/api/jobs', this.job)
      .subscribe(() => {
        alert('Job added successfully');
        this.job = { title: '', description: '', location: '', type: '', closingDate: '' };
        this.jobAdded.emit(); // Notify parent to refresh list
      });
  }
}
