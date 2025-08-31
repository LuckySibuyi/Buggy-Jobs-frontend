import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Job {
  title: string;
  description: string;
  type: string;
  location: string;
}

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobs: Job[] = [];

  addJob(job: Job) {
    this.jobs.push(job);
  }
}
