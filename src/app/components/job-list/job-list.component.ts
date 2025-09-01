import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Job } from '../../services/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  filterType: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
      this.filteredJobs = data;
    });
  }

  applyFilter() {
    this.filteredJobs = this.jobs.filter(job =>
      job.type.toLowerCase().includes(this.filterType.toLowerCase())
    );
  }
}
