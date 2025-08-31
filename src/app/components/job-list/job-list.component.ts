import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input [(ngModel)]="filterType" placeholder="Filter by type">
      <button (click)="applyFilter()">Filter</button>
    </div>

    <ul>
      <li *ngFor="let job of filteredJobs">
        {{ job.title }} - {{ job.type }} - {{ job.location }}
        <button (click)="deleteJob(job.id)">Delete</button>
      </li>
    </ul>
  `
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  filterType: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadJobs();
  }

  // Load all jobs from backend
  loadJobs() {
    this.http.get('http://localhost:5035/api/jobs').subscribe((data: any) => {
      this.jobs = data;
      this.filteredJobs = [...this.jobs];
    });
  }

  // Filter jobs by type
  applyFilter() {
    if (!this.filterType) {
      this.filteredJobs = [...this.jobs];
    } else {
      this.filteredJobs = this.jobs.filter(job =>
        job.type.toLowerCase() === this.filterType.toLowerCase()
      );
    }
  }

  // Delete a job by ID
  deleteJob(id: number) {
    this.http.delete(`http://localhost:5035/api/jobs/${id}`).subscribe(() => {
      this.jobs = this.jobs.filter(j => j.id !== id);
      this.applyFilter();
    });
  }
}
