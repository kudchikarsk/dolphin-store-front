import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.css']
})
export class UiModalComponent implements OnInit {
  @ViewChild("modal") modalEle: ElementRef;  
  @Input() modalId:string;

  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }

  close(): any {
    this.$(this.modalEle.nativeElement).modal('hide');
  }
}
