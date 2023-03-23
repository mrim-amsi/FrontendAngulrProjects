import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-card-component',
  templateUrl: './post-card-component.component.html',
  styleUrls: ['./post-card-component.component.css']
})
export class PostCardComponentComponent implements OnInit {

  constructor(public taskService:PostServiceService) {}
  
  @Input() task: { title: string, urlImg: string} = {
    title: '',
    urlImg:''
  };
  ngOnInit(): void {
  }

}
