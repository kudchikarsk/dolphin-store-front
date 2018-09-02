import { Component, OnInit } from '@angular/core';
import { TonerJob, ITonerJob } from '../models/toner-job';
import { TonerJobService } from '../toner-job.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DateParser } from '../models/date-parser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toner-jobs',
  templateUrl: './toner-jobs.component.html',
  styleUrls: ['./toner-jobs.component.css']
})
export class TonerJobsComponent implements OnInit {
  tonerJobs:TonerJob[];
  editTonerJob:TonerJob;
  listState:number=0;
  fromDate:NgbDate;
  toDate:NgbDate;
  hoveredDate:NgbDate;

  constructor(private tonerJobService:TonerJobService, private calender:NgbCalendar) { 
    this.fromDate=calender.getToday();
    this.toDate=null;
  }

  ngOnInit() {
      this.tonerJobService.getTonerJobs().subscribe(ts=>this.tonerJobs=ts.map(t=>new TonerJob(t)));
  }

  edit(tonerJob:TonerJob){
    this.editTonerJob=tonerJob;
  }

  getInOut(){    
    this.listState=0;
    this.getTonerJobs().subscribe(ts=>{
      this.tonerJobs=ts.map(t=>new TonerJob(t));
      this.tonerJobs=this.tonerJobs.filter(t=> Date.parse(t.In.toString())>=+this.getFromDate());
      var date=+this.getToDate();
        if(!date){
          date=+this.getFromDate();
        }
      this.tonerJobs=this.tonerJobs.filter(t=> Date.parse(t.Out.toString())<=date);
    });
  }

  getIn(){    
    this.listState=1;
    this.getTonerJobs().subscribe(ts=>
      {
        this.tonerJobs=ts.map(t=>new TonerJob(t));
        this.tonerJobs=this.tonerJobs.filter(t=> Date.parse(t.In.toString())>=+this.getFromDate());
      });
  }

  getOut(){    
    this.listState=2;
    this.getTonerJobs().subscribe(ts=>
      {
        var date=+this.getToDate();
        if(!date){
          date=+this.getFromDate();
        }
        this.tonerJobs=ts.map(t=>new TonerJob(t));
        this.tonerJobs=this.tonerJobs.filter(t=> Date.parse(t.Out.toString())<=date);
      });
  }

  getTonerJobs(): Observable<ITonerJob[]> {
    return this.tonerJobService.getTonerJobs(this.getFromDate(),this.getToDate());
  }

  removeTonerJob(tonerJob:TonerJob):void {
    let index=this.tonerJobs.indexOf(tonerJob);
    if(index>-1){
      this.tonerJobs.splice(index,1);
    }
  }

  resetDateRange(){
    this.fromDate=this.calender.getToday();
    this.toDate=null;
    this.getInOut();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.fromDate = date;
      this.toDate = null;
    }

    this.getInOut();
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  getFromDate(){
    return DateParser.Parse(this.fromDate);
  }

  getToDate(){
    return DateParser.Parse(this.toDate);
  }
}
