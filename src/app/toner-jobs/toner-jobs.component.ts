import { Component, OnInit } from '@angular/core';
import { TonerJob } from '../models/toner-job';
import { TonerJobService } from '../toner-job.service';

@Component({
  selector: 'app-toner-jobs',
  templateUrl: './toner-jobs.component.html',
  styleUrls: ['./toner-jobs.component.css']
})
export class TonerJobsComponent implements OnInit {
  tonerJobs:TonerJob[];
  editTonerJob:TonerJob;
  constructor(private tonerJobService:TonerJobService) { }

  ngOnInit() {
      this.tonerJobService.getTonerJobs().subscribe(ts=>this.tonerJobs=ts.map(t=>new TonerJob(t)));
  }

  edit(tonerJob:TonerJob){
    this.editTonerJob=tonerJob;
  }
}
