import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  @Input() public userNAme!: any;
  public currentQuestion: any;
  public backgroundColor: string = 'white';
  public iconClass: string = '';
  public disabledButton: boolean = false;
  public today: number = Date.now();
  public showIconResponse: boolean = false;
  public disabledContinueButton: boolean = true;
  public imageResultTest: string = '';
  public displayImageResultTest: boolean = false;
  public maxID!: any;
  public maxPoints: number = 70;
  public minPercentage: number = 70;
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
    {
      id: 5,
      question:
        'The Pichichi Trophy is awarded to the top scorer in the First Division of:',
      image:
        'https://braggssports.com/wp-content/uploads/2021/01/Most-competitive-European-Leagues-this-2020-to-2021-season.jpg',
      responses: [
        {
          response: 'England',
          value: false,
        },
        {
          response: 'Italy',
          value: false,
        },
        {
          response: 'Spain',
          value: true,
        },
        {
          response: 'Germany',
          value: false,
        },
      ],
    },

    {
      id: 6,
      question:
        'With what name was the first trophy of the Soccer World Cup baptized?',
      image:
        'https://pbs.twimg.com/media/BiEVXWSIMAAp5N3?format=jpg&name=small',
      responses: [
        {
          response: 'Jules Rimet',
          value: true,
        },
        {
          response: 'Abel Lafleur',
          value: false,
        },
      ],
    },
    {
      id: 7,
      question:
        'Name with which the goal made by Maradona with his hand in the World Cup in Mexico 86 is known',
      image:
        'https://www.larazon.es/resizer/z2ORCtrgmzvWyGHSn5FAJk5bCNI=/600x400/smart/filters:format(webp):quality(65)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/ATKPBIOQVJE5VNWGXEUQDUWPUM.jpg',
      responses: [
        {
          response: 'Chilena',
          value: false,
        },
        {
          response: 'God´s hand',
          value: true,
        },
        {
          response: 'Cuautemina',
          value: false,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.userNAme = this.userNAme;
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
      this.backgroundColor = '#28a745';
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

  public resultTitle: string = '';
  public resultText: string = '';
  public totalPercentage: number = 0;
  getPercentage(): void {
    debugger;
    this.totalPercentage = (this.totalPoints / this.maxPoints) * 100;
    this.displayImageResultTest = true;
    if (this.totalPercentage >= this.minPercentage) {
      this.imageResultTest =
        'https://image.shutterstock.com/image-vector/passed-rubber-stamp-600w-754421641.jpg';
      this.resultTitle = 'Passed';
      this.resultText =
        'Congratulations! You have finish the test successfully.';
    } else {
      this.imageResultTest =
        'https://c8.alamy.com/compes/2c5twm4/grunge-rojo-prueba-fallo-palabra-redonda-sello-de-goma-sobre-fondo-blanco-2c5twm4.jpg';
      this.resultTitle = 'Failed';
      this.resultText =
        'Sorry! You haven´t been able to finish the test successfully.';
    }
  }
}
