import { Component } from '@angular/core';
import { JobListComponent } from './components/job-list/job-list.component';
import { AddJobComponent } from './components/add-job/add-job.component'; // ✅ import AddJobComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JobListComponent, AddJobComponent], // ✅ import both components
  templateUrl: './app.component.html'
})
export class AppComponent {}
