import { reducer as weatherReducer } from '../Features/Weather/reducer';
import metricReducer from "./MetricSelector";

export default {
  weather: weatherReducer,
  selectedMetrics: metricReducer
};
