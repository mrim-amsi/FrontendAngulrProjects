import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-list-post-component',
  templateUrl: './list-post-component.component.html',
  styleUrls: ['./list-post-component.component.css']
})
export class ListPostComponentComponent implements OnInit {

  constructor(public taskService:PostServiceService) {}

  ngOnInit(): void {
  }

}
