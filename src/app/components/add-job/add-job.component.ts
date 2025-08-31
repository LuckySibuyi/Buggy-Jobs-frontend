import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-job.component.html'
})
export class AddJobComponent {
  title = '';
  description = '';

  @Output() jobAdded = new EventEmitter<void>();

  addJob() {
    // Normally you would send this to backend
    console.log('Job added:', { title: this.title, description: this.description });

    // Emit event to parent
    this.jobAdded.emit();

    // Clear form
    this.title = '';
    this.description = '';
  }
}
