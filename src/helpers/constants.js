const QUESTION_ANSWER_MAP = {
  '1': {
    question: 'What is your Approx. average first response time?',
    isMultiple: true,
    next: 2,
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
    score: 'Your team is Awesome, following are the industry standards and your team works through them'
  },
  '2': {
    score: 'Average, there are slight delays that are affecting customer service. Most probable causes are listed below',
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

const neoConstants = {
  QUESTION_ANSWER_MAP,
  QUIZ_OUTCOMES
}

export default neoConstants;
