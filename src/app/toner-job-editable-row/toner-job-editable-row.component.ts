import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TonerJob } from '../models/toner-job';
import { TonerJobService } from '../toner-job.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-toner-job-editable-row',
  templateUrl: './toner-job-editable-row.component.html',
  styleUrls: ['./toner-job-editable-row.component.css']
})
export class TonerJobEditableRowComponent implements OnInit {
  @Input() tonerJob:TonerJob;
  @Output() deleteTonerJobEvent:EventEmitter<TonerJob>=new EventEmitter();
  edit:TonerJob;
  isEditable:boolean;
  constructor(private tonerJobService:TonerJobService) { }

  ngOnInit() {
    this.edit=new TonerJob(this.tonerJob);
  }

  update(){
    this.tonerJobService.updateTonerJob(this.edit).subscribe(t=>{
    this.tonerJob.update(this.edit);
    this.isEditable=false;
    });
  }

  cancel(){
    this.edit=new TonerJob(this.tonerJob);
    this.isEditable=false;
  }

  delete(){
    this.tonerJobService.deleteTonerJob(this.tonerJob.Id).subscribe(r=>{
      this.deleteTonerJobEvent.emit(this.tonerJob);
    });
  }
}
