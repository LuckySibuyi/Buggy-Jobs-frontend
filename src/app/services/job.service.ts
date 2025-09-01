import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job.model'; // <-- make sure this path matches exactly

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://localhost:5001/api/jobs'; // adjust to your backend URL

  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<Job[]>(this.apiUrl);
  }

  addJob(job: Job) {
    return this.http.post<Job>(this.apiUrl, job);
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
