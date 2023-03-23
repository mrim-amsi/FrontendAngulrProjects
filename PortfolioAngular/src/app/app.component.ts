import { Component, Input } from '@angular/core';
import { PostServiceService } from './services/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public taskService:PostServiceService) {}
  @Input() task: { title: string} = {
    title: ''
  };
  title = 'portfolioAngular';
}
