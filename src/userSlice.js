import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of France?',
      score: 0,
      status: false,
      options: [
        { id: 1, text: 'Berlin', isCorrect: false, selected: false, xx: false },
        { id: 2, text: 'Paris', isCorrect: true, selected: false, xx: false },
        { id: 3, text: 'Madrid', isCorrect: false, selected: false, xx: false },
        { id: 4, text: 'Rome', isCorrect: false, selected: false, xx: false },
      ],
    },
    {
      id: 2,
      question: 'What is the capital of Palastine?',
      score: 0,
      status: false,
      options: [
        {
          id: 1,
          text: 'Al-qouds',
          isCorrect: true,
          selected: false,
          xx: false,
        },
        { id: 2, text: 'Qaza', isCorrect: false, selected: false, xx: false },
        { id: 3, text: 'Madrid', isCorrect: false, selected: false, xx: false },
        { id: 4, text: 'Rome', isCorrect: false, selected: false, xx: false },
      ],
    },
    {
      id: 3,
      question: 'What is the capital of Eypt?',
      score: 0,
      status: false,
      options: [
        {
          id: 1,
          text: 'Cairo',
          isCorrect: true,
          selected: false,
          xx: false,
        },
        { id: 2, text: 'Sohag', isCorrect: false, selected: false, xx: false },
        { id: 3, text: 'Tanta', isCorrect: false, selected: false, xx: false },
        { id: 4, text: 'Alexandria', isCorrect: true, selected: false, xx: false },
      ],
    },
  ],
};
const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getSeelectedOption(state, action) {
      const { questionId, optionId } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.options.forEach((option) => {
          option.selected = option.id === optionId;
        });
      }
    },
    getCorrect(state, action) {
      const { questionId } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      question.score = 1;
    },
    getInCorrect(state, action) {
      const { questionId } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      question.score = 0;
    },
    getQuestionStatus(state, action) {
      const { questionId } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      question.status = true;
    },
  },
});

export const { getSeelectedOption, getCorrect, getInCorrect, getQuestionStatus } =
  userReducer.actions;
export default userReducer.reducer;
