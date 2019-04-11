import { createActionStates } from "./utils/createActionState";

export const PING = createActionStates("PING");
export const ping = () => ({ type: PING.ACTION });
export const PONG = createActionStates("PONG");

export const DOG = createActionStates("DOG");
export const getDog = () => ({ type: DOG.REQUEST });
export const setDog = payload => ({ type: DOG.SUCCESS, payload });
export const dogError = error => ({ type: DOG.ERROR, error });
export const dogCancel = () => ({ type: DOG.CANCEL });

export const STARWARS = createActionStates("STARWARS");
export const getStarwars = () => ({ type: STARWARS.REQUEST });
export const setStarwars = payload => ({ type: STARWARS.SUCCESS, payload });
export const starwarsError = error => ({ type: STARWARS.ERROR, error });
export const starwarsCancel = () => ({ type: STARWARS.CANCEL });
