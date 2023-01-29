import { Component, Input } from '@angular/core'
import data from '../assets/data.json'
import { SlicePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'comment-ng'
  comments: any[] = data.comments
  currentUser = data.currentUser
  sent: boolean = true
  idNumber: number = -1
  replyScore: number = 4
  repling: boolean = false
  isDisplay = false
  text: string = ''
  upgradeScore: number | undefined
  upgradeText: string | undefined
  upgShow: boolean = false
  upgReplyShow: boolean = false
  reply(id: number) {
    this.idNumber = id
    this.sent = true
  }

  addReplyComment(id: number) {
    this.replyScore += 2
    if (this.text == '') {
      return
    } else {
      this.comments[id - 1]['replies'].push({
        id: this.replyScore,
        replyingTo: this.comments[id - 1].user.username,
        content: this.text,
        createdAt: 'now',
        score: 0,
        user: this.currentUser,
      })
      this.sent = false
    }
  }
  addScore(id: number, prymery: boolean, replyId?: any) {
    if (prymery) {
      this.comments[id - 1].score += 1
    } else {
      this.comments[id - 1].replies.map((element: any) => {
        element.id == replyId
          ? (element.score += 1)
          : (element.score = element.score)
      })
    }
  }

  reduceScore(id: number, prymery: boolean, replyId?: any) {
    if (prymery) {
      this.comments[id - 1].score -= 1
    } else {
      this.comments[id - 1].replies.map((element: any) => {
        element.id == replyId
          ? (element.score -= 1)
          : (element.score = element.score)
      })
    }
  }
  delete(id: number, prymery?: boolean) {
    if (prymery) {
      this.comments = this.comments.filter((element: any) => element.id != id)
    } else {
      this.comments.map((el: any) => {
        console.log('1')
        for (let i = 0; i < el.replies.length; i++) {
          console.log('2')
          if (el.replies[i]['id'] == id) {
            console.log('3')
            el.replies.splice(i, 1)
          }
        }
      })
    }
  }
  editButton(id: number, prymery?: boolean) {
    if (prymery) {
      this.comments.forEach((element: any) => {
        if (element.id == id) {
          this.upgradeText = element.content
          this.upgradeScore = element.score
        }
      })
      this.delete(id, prymery)
      this.upgShow = true
    } else {
      this.comments.map((el: any) => {
        for (let i = 0; i < el.replies.length; i++) {
          if (el.replies[i]['id'] == id) {
            this.upgradeText = el.content
            this.upgradeScore = el.score
            this.delete(id, prymery)
            this.upgReplyShow = true
          }
        }
      })
    }
  }
  upgradeButton() {
    this.replyScore += 2

    this.comments.push({
      id: this.replyScore,
      content: this.upgradeText,
      createdAt: 'now',
      score: this.upgradeScore,
      user: this.currentUser,
    })
    this.sent = false
    this.upgShow = false
  }
}
function appendHtml(commentDiv: any, html: string) {
  throw new Error('Function not implemented.')
}
