import './App.css';
import {MissionRocket} from "./pages/MissionRocket";
import {Route, Switch} from "react-router-dom";
import {Missions} from "./pages/Missions";


function App() {
    return (
        <div className="container-fluid d-flex flex-column align-items-center text-center">
            <Switch>
                <Route path="/mission-rocket">
                    <MissionRocket/>
                </Route>
                <Route path="/">
                    <Missions/>
                </Route>
            </Switch>
        </div>);
}

export default App;
