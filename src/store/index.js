import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./reducers";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();
const initialState = {
    isPinging: false,
    dog: { loading: false, data: "", error: "" },
    starwars: { loading: false, data: [], error: "" }
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
}
