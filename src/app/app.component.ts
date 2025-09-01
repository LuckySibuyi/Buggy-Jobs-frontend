import { Component } from '@angular/core';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobListComponent } from './components/job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddJobComponent, JobListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
