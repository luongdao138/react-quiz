export const convertQuestion = (questions) => {
  const newQues = questions.map((q) => {
    let answers = [
      {
        label: q.correct_answer,
        isCorrect: true,
      },
      ...q.incorrect_answers.map((x) => ({
        label: x,
        isCorrect: false,
      })),
    ];
    let newQ = {
      label: q.question,
      answers: answers.sort(() => Math.random() - 0.5),
    };
    return newQ;
  });
  return newQues;
};
