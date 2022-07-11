import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  public currentQuestion: any;
  public backgroundColor: string = 'white';
  public iconClass: string = '';
  public disabledButton: boolean = false;
  public showIconResponse: boolean = false;
  public disabledContinueButton: boolean = true;
  public maxID!: any;
  public maxPoints: number = 40;
  public minPercentage: number = 40;
  public totalPoints = 0;
  public lgetPercentage: boolean = false;
  public percentageApproval = 100;
  public quizQuestions = [
    {
      id: 1,
      question: "Who's this player?",
      image:
        'https://cambiodemichoacan.com.mx/wp-content/uploads/2022/05/zlatan.jpg',
      responses: [
        {
          response: 'Zlatan Ibrahimovich',
          value: true,
        },
        {
          response: 'Romelu Lukaku',
          value: false,
        },
        {
          response: 'Kevin de Bruyne',
          value: false,
        },
        {
          response: 'Harry Kane',
          value: false,
        },
      ],
    },
    {
      id: 2,
      question: 'What event does this trophy belongs to?',
      image: 'https://images.indianexpress.com/2021/06/euro-2020-trophy.jpg',
      responses: [
        {
          response: 'Gold Cup',
          value: false,
        },
        {
          response: 'UEFA EURO',
          value: true,
        },
        {
          response: 'World Cup',
          value: false,
        },
        {
          response: 'Copa América',
          value: false,
        },
      ],
    },
    {
      id: 3,
      question: 'What event does this club logo belongs to?',
      image:
        'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Ac-Milan-500x313.png',
      responses: [
        {
          response: 'Juventus',
          value: false,
        },
        {
          response: 'AC Milan',
          value: true,
        },
        {
          response: 'Chelsea',
          value: false,
        },
        {
          response: 'Valencia',
          value: false,
        },
      ],
    },
    {
      id: 4,
      question: 'What UEFA EURO tournament did Netherlands win?',
      image:
        'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/uefa-european-championship-1988-vi-archive-5e69095e82781452d0000001.jpg',
      responses: [
        {
          response: 'Portugal 2004',
          value: false,
        },
        {
          response: 'Sweeden 92',
          value: false,
        },
        {
          response: 'Germany 88',
          value: true,
        },
        {
          response: 'England 96',
          value: false,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.currentQuestion = this.quizQuestions.find((x) => x.id == 1);
    this.maxID = this.quizQuestions.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );
  }

  //method to verify answer provided
  submitAnswer(value: boolean): void {
    this.disabledContinueButton = false;
    this.showIconResponse = true;
    if (!value) {
      this.backgroundColor = 'rgb(237, 85, 101)';
      this.iconClass = 'fa fa-times-circle-o';
    } else {
      this.backgroundColor = 'rgb(26, 179, 148)';
      this.iconClass = 'fa fa-check-circle-o';
      this.totalPoints += 10;
    }
    this.disabledButton = true;
  }

  goNext(id: number): void {
    debugger;
    this.currentQuestion = this.quizQuestions.find((x) => x.id == id);
    this.disabledButton = false;
    this.disabledContinueButton = true;
    this.backgroundColor = 'white';
    this.showIconResponse = false;
    if (id === this.maxID.id) {
      this.lgetPercentage = true;
    }
  }

  getPercentage(): void {
    let percentage = (this.totalPoints / this.maxPoints) * 100;
    if (percentage >= this.minPercentage) {
    } else {
    }
  }
}
