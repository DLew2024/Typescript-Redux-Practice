import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const intialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = intialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

/*
  Interface to structure the data that will be returned to the reducer 

  data - list of data from API
  loading - true false whether we are fetching data
  error - string, error message if one occured during fetch
*/

/*
  Reducers handle the data with the action dispatch and the payload
  Action payload returns the data from the response

  search_repos just means the request is loading
  Gets returned success or error 

  On success update data and set loading to false and error to null
  On error update data to error and set loading to false and data to []
*/
