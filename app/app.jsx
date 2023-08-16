//Dependencies ----------------------------------------------------

//React
const ReactDOM = require("react-dom/client");
const React = require("react");

//React-Router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Redux: Provider & Store
import { Provider } from 'react-redux';
import { Store } from './reduxStore/store.jsx';

//Import Components here

//SCSS styles
import './src/scss/main.scss'


//Application code -------------------------------------------------
import { UniversityComponent } from "./components/university_app/university_component.jsx";

ReactDOM.createRoot(
    document.getElementById("app")
)

    .render(
        <Provider store={Store}>
            <BrowserRouter>
                {/* Navigation bar here */}
                <div>
                    <UniversityComponent />


                    <Routes>
                        {/* Routes here */}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );