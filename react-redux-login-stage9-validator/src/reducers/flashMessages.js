import shortid from 'shortid';
import { ADD_FLASH_MESSAGE } from '../constants';
const flashMessages = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      // 三大原则：state不可以被直接改变
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        },
      ];

    default:
      return state;
  }
};
export default flashMessages;
