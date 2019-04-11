import { combineEpics, ofType } from "redux-observable";
import {
    mergeMap,
    delay,
    mapTo,
    map,
    debounceTime,
    catchError,
    takeUntil,
    tap,
    take,
    throttleTime,
    pluck,
    concat
} from "rxjs/operators";
import { fromEvent } from "rxjs";
import {
    PING,
    PONG,
    DOG,
    setDog,
    dogError,
    STARWARS,
    setStarwars,
    starwarsError
} from "../../actions/index";
import { ajax } from "rxjs/ajax";
import axios from "axios";

const pingEpic = action$ =>
    action$.pipe(
        ofType(PING.ACTION),
        debounceTime(2000),
        mapTo({ type: PONG.ACTION })
    );

const fetchDog = action$ =>
    action$.pipe(
        ofType(DOG.REQUEST),
        debounceTime(1000),
        takeUntil(action$.ofType(DOG.CANCEL)),
        mergeMap(action =>
            ajax.getJSON("https://dog.ceo/api/breeds/image/random").pipe(
                // delay(2000),
                pluck("message"),
                map(setDog),
                catchError(dogError)
            )
        )
    );

const windowSizeEpic = () =>
    fromEvent(window, "resize").pipe(
        throttleTime((1 / 60) * 1000),
        mapTo({ type: DOG.REQUEST })
    );

const getAndTransformSomeStarwarsData = action$ =>
    action$.pipe(
        ofType(STARWARS.REQUEST),
        // take(1),
        mergeMap(action =>
            ajax.getJSON("https://swapi.co/api/people/4/").pipe(
                tap(res => console.log(res)),
                map(({ name, starships }) => ({ name, starships })),
                map(setStarwars),
                catchError(starwarsError)
            )
        )
    );

export const rootEpic = combineEpics(
    pingEpic,
    fetchDog,
    getAndTransformSomeStarwarsData,
    windowSizeEpic
);
