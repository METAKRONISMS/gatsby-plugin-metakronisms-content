export const episodeSteps = {
  intro: {
    title: 'Intro',
    body: 'Intro body',
    choices: [
      {
        target: 's1',
        title: 'Step 1',
      },
      {
        target: 's2',
        title: 'Step 2',
      },
      {
        target: 's3',
        title: 'Step 3',
      },
    ],
  },
  s1: {
    title: 'Step 1',
    body: 'Step 1 body',
    choices: [
      {
        target: 's2',
        title: 'Step 2',
      },
      {
        target: 's3',
        title: 'Step 3',
      },
      {
        target: 's4',
        title: 'Step 4',
      },
      // {
      //   target: 'end',
      //   title: 'End',
      // },
    ],
  },
  s2: {
    title: 'Step 2',
    body: 'Step 2 body',
    choices: [
      {
        target: 's3',
        title: 'Step 3',
      },
      {
        target: 's4',
        title: 'Step 4',
      },
      {
        target: 's5',
        title: 'Step 5',
      },
    ],
  },
  s3: {
    title: 'Step 3',
    body: 'Step 3 body',
    choices: [
      {
        target: 's4',
        title: 'Step 4',
      },
      {
        target: 's5',
        title: 'Step 5',
      },
    ],
  },
  s4: {
    title: 'Step 4',
    body: 'Step 4 body',
    choices: [
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  s5: {
    title: 'Step 5',
    body: 'Step 5 body',
    choices: [
      {
        target: 's6',
        title: 'Step 6',
      },
    ],
  },
  s6: {
    title: 'Step 6',
    body: 'Step 6 body',
    choices: [
      {
        target: 's7',
        title: 'Step 7',
      },
    ],
  },
  s7: {
    title: 'Step 7',
    body: 'Step 7 body',
    choices: [
      {
        target: 's8',
        title: 'Step 8',
      },
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  s8: {
    title: 'Step 8',
    body: 'Step 8 body',
    choices: [
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  end: {
    title: 'End',
    body: 'End body',
  },
};

const steps = ['s1', 's3', 's4'];

export default {
  steps,
  episodeSteps,
  getStepInfo: (wanted = 'intro') => episodeSteps[wanted],
};
