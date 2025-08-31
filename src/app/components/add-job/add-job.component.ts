import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Job } from '../job-list/job-list.component';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
  
})
export class AddJobComponent {
  @Output() jobAdded = new EventEmitter<Job>();

  title = '';
  description = '';
  type = '';
  location = '';

  submit() {
    if (!this.title || !this.description || !this.type || !this.location) return;

    this.jobAdded.emit({
      title: this.title,
      description: this.description,
      type: this.type,
      location: this.location,
    });

    // Clear form
    this.title = '';
    this.description = '';
    this.type = '';
    this.location = '';
  }
}
