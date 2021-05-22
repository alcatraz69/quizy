import { v4 as uuidv4 } from "uuid";

export type Options = {
  id: string;
  text: string;
  isRight: boolean;
};

export type Questions = {
  id: string;
  question: string;
  points: number;
  negativePoints: number;
  options: Options[];
};

export type Quiz = {
  id: string;
  topic: string;
  description: string;
  playTime: number;
  image: string;
  questions: Questions[];
};

export type QuizDatabase = Quiz[];

export const quizdatabase: QuizDatabase = [
  {
    id: uuidv4(),
    topic: "Friends",
    description:
      "Take part in the amazing quiz and test your knowledge of the friends tv show",
    playTime: 5,
    image: "https://img.wallpapersafari.com/desktop/800/450/18/11/CZu9aU.jpg",
    questions: [
      {
        id: uuidv4(),
        question:
          "Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Pete Becker",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Joey Tribbiani",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Eddie Menuek",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Pete Becker",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question:
          "How many times has Ross Geller been married?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Four",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Five",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Three",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Two",
            isRight: true
          }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    topic: "Silicon Valley",
    description:
      "Take part in the amazing quiz and test your knowledge of silicon valley",
    playTime: 5,
    image:
      "https://i.pinimg.com/originals/46/0e/7c/460e7c490fdcc62d86cfc7eb42d62d1a.jpg",
    questions: [
      {
        id: uuidv4(),
        question:
          "What is Pied Piper?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "A lossless compression software.",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A scary story.",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "A woman.",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A Song.",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "Gilfoyle subscribes to what religion?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Christianity.",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Satanism",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "He's Agnostic.",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Scientology.",
            isRight: false
          }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    topic: "Breaking Bad",
    description:
      "Take part in the amazing quiz and test your knowledge of Breaking Bad",
    playTime: 5,
    image: "https://images.indianexpress.com/2018/01/breaking-bad-7591.jpg",
    questions: [
      {
        id: uuidv4(),
        question: "What business do Walter and Skyler run in the later part?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Supermarket",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Car Wash",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Gas Station",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Restaurant",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What was the hidden lab made by Gustavo Fring built over?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "A oil refinary",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A Laundary",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A warehouse",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "A Restraunt",
            isRight: false
          }
        ]
      }
    ]
  },
  
];
