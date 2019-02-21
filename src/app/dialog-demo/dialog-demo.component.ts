import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent {

ansver: string;
public user: string;


constructor(public dialog: MatDialog) { }

  @Output('AddMessage') addMessage = new EventEmitter<object>();

  public adding(user_mes: string, bot_mes: string) {

    if (localStorage.getItem(user_mes) == null) {
    
      const dialogRef = this.dialog.open(MyDialogComponent, {
        width: '600px',
        data: 'Введите ответ сами, он будет сохранен',
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.ansver = result;
        localStorage.setItem(user_mes, this.ansver);
      });
      bot_mes = 'Я не знаю ответа на вопрос';

    } else {
      bot_mes = localStorage.getItem(user_mes);
    }
    
    this.addMessage.emit({user_mes, bot_mes});
    this.user = '';
  }
}