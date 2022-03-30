import React from 'react';
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import ReactFlowPage from "./pages/ReactFlowPage";

dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(duration)
dayjs.tz.guess()


/**
 * Root for the app, sets the routes and configures the interceptors
 */
const App: React.FC = () => {
    return <ReactFlowPage/>
}

export default App;

