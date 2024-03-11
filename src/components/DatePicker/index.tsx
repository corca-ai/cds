import { DateTime } from './DateTime';
import { SingleDate } from './SingleDate';

/**
 * must import 'react-datepicker/dist/react-datepicker.css'  in app to use react-datepicker
 */
const DatePicker = { Date: SingleDate, DateTime };
export default DatePicker;
