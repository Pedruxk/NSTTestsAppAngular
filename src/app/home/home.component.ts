import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public userNAme: any = undefined;
  public loadChild: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  startQuiz() {
    this.loadChild = true;
  }
}
