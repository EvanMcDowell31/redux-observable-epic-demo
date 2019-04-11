import { combineReducers } from "redux";
import { PING, PONG, DOG, STARWARS } from "../../actions/index";

const pingReducer = (state = false, { type }) => {
    switch (type) {
        case PING.ACTION:
            return true;
        case PONG.ACTION:
            return false;
        default:
            return state;
    }
};

const dogInitialState = { loading: false, data: "", error: "" };
const dogReducer = (state = dogInitialState, { type, payload }) => {
    switch (type) {
        case DOG.REQUEST:
            return { loading: true, data: state.data, error: "" };
        case DOG.SUCCESS:
            return { loading: false, data: payload, error: "" };
        case DOG.ERROR:
            return { loading: false, data: "", error: payload.error };
        case DOG.CANCEL:
            return { loading: false, data: state.data, error: "" };
        default:
            return state;
    }
};

const starwarsInitialState = { loading: false, data: [], error: "" };
const starwarsReducer = (state = starwarsInitialState, { type, payload }) => {
    switch (type) {
        case STARWARS.REQUEST:
            return { loading: true, data: state.data, error: "" };
        case STARWARS.SUCCESS:
            return {
                loading: false,
                data: [...state.data, payload],
                error: ""
            };
        case STARWARS.ERROR:
            return { loading: false, data: [], error: payload.error };
        case STARWARS.CANCEL:
            return { loading: false, data: state.data, error: "" };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    isPinging: pingReducer,
    dog: dogReducer,
    starwars: starwarsReducer
});
