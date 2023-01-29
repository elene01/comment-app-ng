import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {
@Input() replyItem:any
@Input() reply:any
@Input() currentUser: any
@Input() addScore:any
@Input() comment:any
@Input() reduceScore:any
@Input() comments: any[] = []
@Input() addReplyComment: any
@Input() text:string = ''
@Input() sent:any 
@Input() idNumber:number = -1
@Input() delete:any 
@Input() editButton:any
@Input() upgReplyShow:boolean = false
@Input() upgradeText:string | undefined
@Input() upgradeScore: number | undefined

}
