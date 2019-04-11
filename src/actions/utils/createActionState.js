import { defineAction } from "redux-define";
import {
    REQUEST,
    SUCCESS,
    ERROR,
    CANCEL
} from "../../lib/constants/reduxSuffixes";

export const createActionStates = baseActionString => {
    return defineAction(baseActionString, [REQUEST, SUCCESS, ERROR, CANCEL]);
};
