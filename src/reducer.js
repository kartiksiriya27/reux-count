const initialState = 0;

export default function countReducer(preState = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case 'increment':
      return preState + 1;
    case 'decrement':
      return preState - 1;
    default:
      return preState;
  }
}


