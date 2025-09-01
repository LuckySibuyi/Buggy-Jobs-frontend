import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../services/job.model';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  @Output() jobAdded = new EventEmitter<void>();

  job: Job = { title: '', description: '', type: '', location: '', closingDate: '' };

  constructor(private jobService: JobService) {}

  addJob() {
    if (!this.job.title || !this.job.closingDate) {
      alert('Title and closing date are required.');
      return;
    }

    const closing = new Date(this.job.closingDate);
    if (closing <= new Date()) {
      alert('Closing date must be in the future.');
      return;
    }

    this.jobService.addJob(this.job).subscribe(() => {
      this.jobAdded.emit();
      this.job = { title: '', description: '', type: '', location: '', closingDate: '' };
    });
  }
}
