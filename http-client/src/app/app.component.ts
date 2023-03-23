import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'http-client';
  baseUrl = environment.baseURL + '/api/posts';
  loadedPosts: { title: string, userId : number, description: string, image: string }[] = [];
  isFetching = false;
  AddPostForm!: FormGroup;
  constructor(
    private httpClient: HttpClient,
  ) {}
  ngOnInit(): void {
    this.onFetchPosts();
  }


   onFetchPosts() {
    this.isFetching = true;
 
     this.httpClient
     .get<{ title: string, userId : number, description: string, image: string }[]>(this.baseUrl, {
      })
      .subscribe({
        next: (data) => {
          this.loadedPosts = data;
          this.isFetching = false;
        },
        error: (error) => {
          this.isFetching = false;
        },
       });
  }

  
  
}
