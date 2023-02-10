import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  @Output() isCloseDialog = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseDialog() {
    this.isCloseDialog.emit(false)
  }
}
