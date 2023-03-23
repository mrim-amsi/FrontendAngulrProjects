import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponentComponent } from './content-component/content-component.component';
import { ListPostComponentComponent } from './list-post-component/list-post-component.component';
import { PostCardComponentComponent } from './post-card-component/post-card-component.component';
import { PostDetailsComponent } from './post-details/post-details.component';
;

const appRoutes: Routes = [
  // { path: '', component: ListPostComponentComponent },
  { path: '', component: ListPostComponentComponent },
  { path: 'content', component: ContentComponentComponent },
  { path: 'posts/:postId', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
