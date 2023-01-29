import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler'
import { Component, Input, OnChanges, Output } from '@angular/core'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input()
  comments: any[] = []
  @Input()
  currentUser: any
  @Input() add: any
  @Input() addScore: any
  @Input() reply: any
  @Input() addReplyComment: any
  @Input() ngOnChanges: any
  @Input() text: string = ''
  @Input() sent: boolean = false
  @Input() idNumber: number = -1
  @Input() reduceScore: any
  @Input() delete: any
  @Input() upgradeScore: number | undefined
  @Input() upgradeText: string | undefined
  @Input() upgShow: boolean = false
  @Input() editButton:any 
  @Input() upgReplyShow:boolean = false
  @Input() upgradeButton : any
 
}

function EventEmitter<T>() {
  throw new Error('Function not implemented.')
}
