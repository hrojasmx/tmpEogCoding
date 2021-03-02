// import * as actions from "../actions";
import { SELECT_METRIC } from "./actions";

const initialState = {
    tubingPressure: true,
    casingPressure: null,
    oilTemp: null,
    flareTemp: null,
    waterTemp: null,
    injValveOpen: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_METRIC:
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }

        default:
            return state;
    }
};
