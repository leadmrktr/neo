// API constants

const API_SAVE_USER_DETAILS = 'https://sarathsp06.pythonanywhere.com/save'
const API_GET_USERS = 'https://sarathsp06.pythonanywhere.com/users'


const QUESTION_ANSWER_MAP = {
  '1': {
    question: 'What is your Approx. average first response time?',
    isMultiple: true,
    next: 2,
    current: 1,
    mainHead: (name) => `Hi ${name}, Following questions are designed to evaluate your support team. Answer the questions
in the best way possible to get an accurate result.`,
    answers: [
      {
        value: '0 to 5 minutes',
        outcome: 1,
        id: 1
      },
      {
        value: '5 minutes to 30 minutes',
        outcome: 1,
        id: 2
      },
      {
        value: '30 minutes to 1 hour',
        outcome: 2,
        id: 3
      },
      {
        value: '1 hour to 24 hours',
        outcome: 2,
        id: 4
      },
      {
        value: 'More than 24 hours',
        outcome: 3,
        id: 5
      }
    ]
  },
  '2': {
    question: 'What’s your average resolution time?',
    isMultiple: true,
    next: 3,
    current: 2,
    answers: [
      {
        value: '0 to 24 hours ',
        outcome: 1,
        id: 1
      },
      {
        value: '24 to 48 hours',
        outcome: 2,
        id: 2
      },
      {
        value: 'More than 48 hours',
        outcome: 3,
        id: 3
      }
    ]
  },
  '3': {
    question: 'What’s your customers average waiting time on the queue?',
    isMultiple: true,
    next: 4,
    current: 3,
    answers: [
      {
        value: '0 to 3 minutes ',
        outcome: 1,
        id: 1
      },
      {
        value: '3 to 15 minutes',
        outcome: 2,
        id: 2
      },
      {
        value: 'More than 15 minutes',
        outcome: 3,
        id: 3
      },
      {
        value: 'Doesn’t apply',
        outcome: null,
        id: 4
      }
    ]
  },
  '4': {
    question: 'How many tickets your agents handle on an average per month?',
    isMultiple: true,
    next: -1,
    current: 4,
    answers: [
      {
        value: 'Less than 300',
        outcome: 1,
        id: 1
      },
      {
        value: '300 to 600',
        outcome: 2,
        id: 2
      },
      {
        value: 'More than 600',
        outcome: 3,
        id: 3
      }
    ]
  }
}

const QUIZ_OUTCOMES = {
  '1': {
    head: 'You are AWESOME!',
    score: 'Don’t change a thing! stick to whatever you are doing and you would achieve Nirvana :) \n\nThough you should consider some technological advances in your industry, if you aren’t already!',
    link: {
      text: 'Automations in Support Industry',
      ref: 'https://blog.kommunicate.io/how-to-improve-customer-support-8a3b5851c990'
    },
    details: []
  },
  '2': {
    head: 'Average',
    score: 'there are slight delays that are affecting customer service. Most probable causes are listed below',
    details: [
      'Too many tickets are coming your team’s way',
      'Extended dependency on third party (tech teams etc) are causing delays in response',
      'Customers do not understand the product and questions are popping up because of it'
    ]
  },
  '3': {
    score: 'Poor, you need to change things up urgently \n According to an oracle survey customer would max wait for 48 to 72 hours before deciding to find an alternative. \n Additionally, you might have to look into your documentation and other customer support resources including your team. \n Some of the reasons for a poor performance can be',
    details: [
      'Customer do not understand your system at all, leading to trivial queries like password reset being sent as tickets',
      'You either don’t have a support team or have a team which is not used to handling customer queries. Refer this article to understand hiring',
      'On top of having too many queries, your team is left doing repetitive tasks. Try automating, this should help decrease ticket by at least 25%'
    ]
  }
}

const WHAT_TYPE_OF_BOSS_ARE_YOU = {
  '1': {
    question: 'What do you think of your employees?',
    isMultiple: true,
    next: 2,
    current: 1,
    answers: [
      {
        value: 'They are here to do their job and I don’t care',
        outcome: 4,
        id: 1
      },
      {
        value: 'They are family, I love’em',
        outcome: 2,
        id: 2
      },
      {
        value: 'They are cool but work is work',
        outcome: 1,
        id: 3
      },
      {
        value: 'They are gullible, I act as if I care but I don’t actually',
        outcome: 2,
        id: 4
      },
      {
        value: 'I love my employees , we are a team we work together in and out of office to meet our goals',
        outcome: 3,
        id: 5
      }
    ]
  },
  '2': {
    question: 'Numbers are low across the board what do you do?',
    isMultiple: true,
    next: 3,
    current: 2,
    answers: [
      {
        value: 'Get the entire team in a room and give them a verbal beat down',
        outcome: 4,
        id: 1
      },
      {
        value: 'Bring the team together and figure out what the problem is ( roost cause analysis) and try to solve it together',
        outcome: 1,
        id: 2
      },
      {
        value: 'Let them go for once, they are people too',
        outcome: 3,
        id: 3
      },
      {
        value: 'Something must be wrong, You would try to figure this out yourself',
        outcome: 2,
        id: 4
      }
    ]
  },
  '3': {
    question: 'Your boss gave you a task that needs to be done today, what do you do?',
    isMultiple: true,
    next: 4,
    current: 3,
    answers: [
      {
        value: 'Dump it all to your team and give them a deadline of half a day',
        outcome: 4,
        id: 1
      },
      {
        value: 'Do it all by yourself',
        outcome: 2,
        id: 2
      },
      {
        value: 'Get everyone together and try to finish it together',
        outcome: 1,
        id: 3
      },
      {
        value: 'Tell your boss it might not be possible but you would try to finish it with your team',
        outcome: 3,
        id: 4
      }
    ]
  },
  '4': {
    question: 'How much do your employees know about you?',
    isMultiple: true,
    next: 5,
    current: 4,
    answers: [
      {
        value: 'They don’t need to know',
        outcome: 2,
        id: 1
      },
      {
        value: 'Enough to have a friendly banter',
        outcome: 4,
        id: 2
      },
      {
        value: 'They are family. I share everything with them',
        outcome: 1,
        id: 3
      },
      {
        value: 'I don’t actively share unless they ask for it',
        outcome: 3,
        id: 4
      }
    ]
  },
  '5': {
    question: 'Your team member did a real good job, what do you do?',
    isMultiple: true,
    next: -1,
    current: 5,
    answers: [
      {
        value: 'Give him a pat and tell him he did a good job',
        outcome: 3,
        id: 1
      },
      {
        value: 'Buy him a small token of gift',
        outcome: 1,
        id: 2
      },
      {
        value: 'Do nothing, he is already being paid for it',
        outcome: 4,
        id: 3
      },
      {
        value: 'Wonder, if he can do better',
        outcome: 2,
        id: 4
      }
    ]
  }
}

const BOSS_QUIZ_OUTCOMES = {
  '1': {
    head: 'The Boss Baby - Knows strengths and Weaknesses, the team player',
    image: 'http://junkee.com/wp-content/uploads/2017/04/static1.squarespace.jpg',
    details: [
      'You are a born leadre. You understand your team mates strengths and weaknesses and have',
      'learnt to give them jobs that they are good at.',
      'You trust them but also understand where to step in.',
      'You don’t micro-manage',
      'You teach and nurture your reportees',
      'You are awesome',
      'You are the Boss !, everyone wants to work with'
    ]
  },
  '2': {
    head: 'Frank Underwood - House of Cards - The autocratic, cold blooded manipulator',
    image: 'https://cnet4.cbsistatic.com/img/ALUr3p2ioUn8Vqjygby5JqKT02U=/1600x900/2016/03/22/980bdb5e-b015-417b-9f55-553d9ef29d52/02212014kevinspaceyhouseofcardsnetflix.jpg',
    details: [
      'You are the man no one wants to make an enemy of.',
      'You know your reportees strengths',
      'You hate that they have any weaknesses, because their weakness is your weakness',
      'You are cold blooded, straight to the point and F** the emotions kinda guy.',
      'People under either get destroyed or emerge to be power houses themselves',
      'You are a master of the game, you do what needs to be done and whatever is good for you. Everyone else is just  Pawn',
      'You are the king, you are are the Boss'
    ]
  },
  '3': {
    head: 'THE CHARLIE  from Charlie’s angels - You’ve raised them from ground up, they are family',
    image: 'https://m.media-amazon.com/images/M/MV5BNWYwZTQ1MzgtYmIwNi00MDllLWEzZjQtNmQ2YmVlZjA0NzMzXkEyXkFqcGdeQXVyMzI4Nzk0NjY@._V1_.jpg',
    details: [
      'You are the mentor that everyone wants',
      'You’ve bought up and nurtured your reportees to be better',
      'Your employees are your kids ',
      'You are protective of them but are stern when needed',
      'You are Charlie, You are the Boss!'
    ]
  },
  '4': {
    head: 'Michael Scott from the Office- sink or swim you don’t care',
    image: 'https://mutantreviewers.files.wordpress.com/2014/12/os13.jpg',
    details: [
      'You are really good at the tasks you were given as a frontline worker',
      'Was made into a manager because there was no one else',
      'You hate being a manager',
      'You rather jump of a cliff.',
      'You let your employees do whatever they want and don’t care as such',
      'You waste most of your time procrastinating',
      'You are NOT the Boss!'
    ]
  }
}

const neoConstants = {
  QUESTION_ANSWER_MAP,
  QUIZ_OUTCOMES,
  API_SAVE_USER_DETAILS,
  API_GET_USERS,
  WHAT_TYPE_OF_BOSS_ARE_YOU,
  BOSS_QUIZ_OUTCOMES
}

export default neoConstants;
