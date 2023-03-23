import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { PostCardComponentComponent } from './post-card-component/post-card-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPostComponentComponent } from './list-post-component/list-post-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component'
import { PostDetailsComponent } from './post-details/post-details.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    ContentComponentComponent,
    PostCardComponentComponent,
    ListPostComponentComponent,
    NavbarComponentComponent,
    PostDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
