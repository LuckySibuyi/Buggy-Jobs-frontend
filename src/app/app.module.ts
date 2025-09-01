import { Component, signal } from '@angular/core';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddJobComponent, JobListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly title = signal('Buggy Jobs');
}
