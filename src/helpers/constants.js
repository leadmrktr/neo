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

const neoConstants = {
  QUESTION_ANSWER_MAP
}

export default neoConstants;
