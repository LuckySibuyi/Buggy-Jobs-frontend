import { Component } from '@angular/core';
import { JobListComponent } from './components/job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,          // <- mark AppComponent standalone
  imports: [JobListComponent], // <- import the standalone JobListComponent
  templateUrl: './app.component.html'
})
export class AppComponent {}
