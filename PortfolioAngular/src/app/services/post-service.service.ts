import { Injectable } from '@angular/core';
import IPost from '../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }
  tasks: IPost[] = [
    {
      title:
        'PostA',
        urlImg:
        '/assets/images/imgA.png',
    },
    {
      title:
        "PostC",
        urlImg:
        '/assets/images/imgC.png',
    },
    {
      title:
        "PostB",
        urlImg:
        '/assets/images/imgB.png',
    },
    {
      title:
        "PostD",
        urlImg:
        '/assets/images/imgD.png',
    },
  ];


  getPosts(): IPost[] {
    return this.tasks;
  }
  getPost(id: String): IPost {
    //For Testing (mock up data)
    return this.tasks.find((post) => post.title == id)!;
  }
}
