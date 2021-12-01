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
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Two",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question:
        "What’s the name of the coffee shop that the friends always go to?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Insomnia Cafe",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Friends Cafe",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Central Perk",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Farzi Cafe",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question:
        "How many times did Chandler and Janice break up during the entirety of Friends?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Five Times",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Two times",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Three times",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Four Times",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question:
        "Where do Monica and Chandler start to have feelings for each other?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Central Perk",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "New York",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "The Beach",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "London",
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
            isRight: true
          },
          {
            id: uuidv4(),
            text: "A scary story.",
            isRight: false
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
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Satanism",
            isRight: true
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
      },
      {
        id: uuidv4(),
        question: "Who Does Richard Hire From Hooli To Help Him With Pied Piper’s Business Plan?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Monica Hall",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Jason Dexter",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Jared Dunn",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Peter Gregory",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "Where did Richard first meet Peter Gregory?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "At Hooli",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "At a Coffe shop",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "At a tech-startup summit",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Outside a TED talk",
            isRight: true
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What is the name of the test that measures the performance of lossless compression software?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "The Compressor",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "The Tester",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Weissman Score",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "TechCrunch Test",
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
            isRight: true
          },
          {
            id: uuidv4(),
            text: "A warehouse",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A Restraunt",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "What is the name of the Walt Whitman book that Hank finds in Walt's bathroom, confirming that his brother-in-law is the Heisenberg?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Song of Myself",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "A Noiseless patient spider",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Drum Taps",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Leaves of Grass",
            isRight: true
          }
        ]
      },
      {
        id: uuidv4(),
        question: "Saul's contact, who specializes in acquiring new identities for people, repairs what as a front?",
        points: 2,
        negativePoints: -1,
        options: [
          {
            id: uuidv4(),
            text: "Vacuum Cleaners",
            isRight: true
          },
          {
            id: uuidv4(),
            text: "Hot Water Heaters",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Washing Machines",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Stereos",
            isRight: false
          }
        ]
      },
      {
        id: uuidv4(),
        question: "Gus Fring, a crime syndicate boss, owns a restaurant in the show. What is the name of that fried chicken restaurant?",
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
            text: "Delicioso Pollo",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Pollo Feliz",
            isRight: false
          },
          {
            id: uuidv4(),
            text: "Pollos Hermanos",
            isRight: true
          }
        ]
      },
    ]
  },
  
];
