import { LOAD_FETCH, REMOVE_ADD, ADD_REMOVE } from "../actions/actionCreators";
/* eslint-disable */

const initialState = {
  mylist: [],
  recommendations: [],
  isList: true,
  isShowInRec: false,
  countRunTime: 0
};

function rootReducer(state = initialState, action) {
  // debugger;
  let id = action.id;
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case LOAD_FETCH:
      return {
        ...state,
        mylist: action.dataLoad.mylist,
        recommendations: action.dataLoad.recommendations
      };
    case REMOVE_ADD:
      let newStateRA = { ...state };
      let newList = state.mylist.filter(lt => lt.id !== id);
      let newRecomItem = state.mylist.filter(lt => lt.id === id)[0];
      return {
        ...newStateRA,
        mylist: newList,
        recommendations: [...state.recommendations, newRecomItem]
      };
    case ADD_REMOVE:
      let newStateAR = { ...state };
      let newRecomList = state.recommendations.filter(rm => rm.id !== id);
      let newListItem = state.recommendations.filter(rm => rm.id === id)[0];
      return {
        ...newStateAR,
        mylist: [...state.mylist, newListItem],
        recommendations: newRecomList
      };
    default:
      return state;
  }
}

export default rootReducer;
