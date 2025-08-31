import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ needed for *ngFor

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule], // ✅ include CommonModule
  templateUrl: './job-list.component.html'
})
export class JobListComponent {
  jobs: { title: string; description: string }[] = [];

  loadJobs() {
    // Example: add a dummy job or refresh from backend
    this.jobs.push({ title: 'Frontend Developer', description: 'Build Angular apps' });
  }
}
