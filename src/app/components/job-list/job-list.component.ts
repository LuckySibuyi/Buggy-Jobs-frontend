import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../services/job.model';

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
  filterType = '';
  filterLocation = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
      this.filteredJobs = data;
    });
  }

  applyFilter() {
    this.filteredJobs = this.jobs.filter(job =>
      (!this.filterType || job.type?.toLowerCase().includes(this.filterType.toLowerCase())) &&
      (!this.filterLocation || job.location?.toLowerCase().includes(this.filterLocation.toLowerCase()))
    );
  }
}
