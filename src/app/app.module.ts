import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommentsComponent } from './comments/comments.component'
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReplyComponent } from './components/reply/reply.component'

@NgModule({
  declarations: [AppComponent, CommentsComponent, AddCommentComponent, ReplyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
