import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IPost from '../models/IPost';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post!: IPost;
  constructor(
    private postService: PostServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let postId = params.get('postId')!;
      this.post = this.postService.getPost(postId);
    });
  }

  onNavigateToUser(userId: number) {
    this.router.navigate(['/users', userId]);
  }
}
