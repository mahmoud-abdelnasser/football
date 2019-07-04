
import { combineReducers } from 'redux';
import competitions from './competitions';
import alerts from './alerts';
import leaguesItem from './leaguesItem';
import teams from './teams'


export default function createRootReducer() {

  return (
    combineReducers({
        competitions,
        leaguesItem,
        teams,
        alerts
    }))
}