import { combineReducers } from "redux";
import { ADD_ITEM } from "src/helpers/constants";

const INITIAL_LIST = [
  { text: 'Call Dwight Schrute', label: 'Work', isDone: false },
  { text: 'Learn redux', label: 'Work', isDone: true },
  { text: 'Buy bananas', label: 'Family', isDone: false },
  { text: 'Take out the trash', label: 'Family', isDone: true },
  { text: 'Go for a walk', label: 'Personal', isDone: false },
  { text: 'Do morning exercise', label: 'Personal', isDone: true },
];

const todos = (state = INITIAL_LIST, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        text: action.text,
        label: action.label,
        isDone: false
      }
      return [...state, newItem]
    default:
      return state
  }
}

const filteredTodos = (state = INITIAL_LIST, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.sort((a: any, b: any) => (a.isDone ? 1 : -1))
    default:
      return state
  }
}

export default combineReducers({
  todos,
  filteredTodos
})