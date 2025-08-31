import { Component, ViewChild } from '@angular/core';
import { JobListComponent } from './components/job-list/job-list.component';
import { AddJobComponent } from './components/add-job/add-job.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JobListComponent, AddJobComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('jobList') jobList!: JobListComponent;

  // Optional: helper method to reload jobs
  reloadJobs() {
    this.jobList.loadJobs();
  }
}
