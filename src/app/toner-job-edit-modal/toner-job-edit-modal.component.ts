import { Component, OnInit, Input } from '@angular/core';
import { TonerJob } from '../models/toner-job';

@Component({
  selector: 'app-toner-job-edit-modal',
  templateUrl: './toner-job-edit-modal.component.html',
  styleUrls: ['./toner-job-edit-modal.component.css']
})
export class TonerJobEditModalComponent implements OnInit {
  @Input() tonerJob:TonerJob;
  constructor() { }

  ngOnInit() {
  }

}
