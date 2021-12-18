import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR
} from '../actions/types';

const initialAppState = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state=initialAppState, action) => {
  switch(action.type){
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      }

    case PLUS:
      if(state.calculate === true){  //more than one time
        return {
        ...state,
        inputValue: 0,
        operator: '+',
        resultValue: state.inputValue + state.resultValue,
        showingResult: true,
      };
      }else{    //first time
        return{
          ...state,
          inputValue: 0, //add number
          operator: '+',
          resultValue: state.inputValue,
          calculate: true, //run logic
          showingResult: true,
        }
      }

    case MINUS:
      if(state.calculate === true){  //more than one time
        return {
        ...state,
        inputValue: 0,
        operator: '-',
        resultValue: state.inputValue - state.resultValue,
        showingResult: true,
      };
      }else{    //first time
        return{
          ...state,
          inputValue: 0, //add number
          operator: '-',
          resultValue: state.inputValue,
          calculater: true, //run logic
          showingResult: true,
        }
      }
    case MULTIPLY:
      if(state.calculate === true){  //more than one time
        return {
        ...state,
        inputValue: 0,
        operator: '*',
        resultValue: state.inputValue * state.resultValue,
        showingResult: true,
      };
      }else{    //first time
        return{
          ...state,
          inputValue: 0, //add number
          operator: '*',
          resultValue: state.inputValue,
          calculater: true, //run logic
          showingResult: true,
        }
      }
    case DIVIDE:
      if(state.calculate === true){  //more than one time
        return {
        ...state,
        inputValue: 0,
        operator: '/',
        resultValue: state.inputValue / state.resultValue,
        showingResult: true,
      };
      }else{    //first time
        return{
          ...state,
          inputValue: 0, //add number
          operator: '/',
          resultValue: state.inputValue,
          calculater: true, //run logic
          showingResult: true,
        }
      }

      case CLEAR:
        return{
          inputValue: 0,
          operator: '',
          calculater: false,
          resultValue: 0,
          showingResult: false,
        };

      case EQUAL:
        switch(state.operator) {
          case '+':
            return {
              inputValue: state.resultValue + state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue + state.inputValue,
              showingResult: true,
            };
          case '-':
            return {
              inputValue: state.resultValue - state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue - state.inputValue,
              showingResult: true,
            };
          case '*':
            return {
              inputValue: state.resultValue * state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue * state.inputValue,
              showingResult: true,
            };
          case '/':
            return {
              inputValue: state.resultValue / state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue / state.inputValue,
              showingResult: true,
            };
          default:
            return state;
        }
      default:
        return state;
  }
};

export default calculator;