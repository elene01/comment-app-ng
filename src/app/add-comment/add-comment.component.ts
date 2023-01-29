import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {
  @Input()
  comments: any[] = []
  @Input()
  currentUser: any
  @Input() text: string = ''

  add() {
    if (this.text == '') {
      return
    } else {
      this.comments.push({
        id: this.comments.length + 1,
        content: this.text,
        createdAt: 'now',
        score: 0,
        user: this.currentUser,
        replies: [],
      })
    }
    this.text == ''
  }
}
