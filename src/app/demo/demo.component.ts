import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  public currentQuestion: any;
  public backgroundColor: string = 'white';
  public disabledButton: boolean = false;
  public disabledContinueButton: boolean = true;
  public totalPoints = 0;
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
  ];

  ngOnInit(): void {
    this.currentQuestion = this.quizQuestions.find((x) => x.id == 1);
  }

  submitAnswer(value: boolean): void {
    this.disabledContinueButton = false;
    if (!value) {
      this.backgroundColor = 'rgb(237, 85, 101)';
    } else {
      this.backgroundColor = 'rgb(26, 179, 148)';
      this.totalPoints += 1;
    }
    this.disabledButton = true;
  }

  goNext(id: number): void {
    this.currentQuestion = this.quizQuestions.find((x) => x.id == id);
    this.disabledButton = false;
    this.disabledContinueButton = true;
    this.backgroundColor = 'white';
  }
}
