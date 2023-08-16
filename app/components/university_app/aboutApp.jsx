import React, { useState } from "react";

function AboutApp(){
    return (
        <div className="aboutBlock">
            <div className="aboutWrapper">
                <div className="appDescription">
                    <h3>Description:</h3>
                    <p>This site is a guide to world universities. It provides the official names of universities in 243 countries with links to websites. Additionally, the flag, capital, name and code of the national currency of the country are displayed.</p>
                </div>
                <div className="instructionBlock">
                    <h3>Instruction:</h3>
                    <p>To display universities in the selected country, use the list on the left of the main page. Scroll through the list and click on the country of interest. You can also use the search field to display the country of interest.</p>
                    <p><span className="attentionWord">Important:</span> links to some university websites may not work correctly as information changes and the database is updated whenever possible.</p>
                </div>
                <div className="appResourses">
                    <h3>Resources:</h3>
                    <p>The following resources serve as databases for the site: </p>
                    <ul>
                        <li>Universities: <a target="_blank" href={"https://github.com/Hipo/university-domains-list"}>University Domains and Names Data List & API</a></li>
                        <li>Country flags: <a target="_blank" href={"https://countryflagsapi.netlify.app/#how-to-use"}>CountryFlagsAPI</a></li>
                        <li>Capitals and currency: <a target="_blank" href={"https://api-ninjas.com/api/country"}>API Ninjas: Country API</a></li>
                    </ul>
                </div>
                <div className="appTech">
                    <h3>Technologies: </h3>
                    <p>Technologies used in the project: </p>
                    <ul>
                        <li>React & Redux</li>
                        <li>Html, Scss, Javascript</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                <div className="madeBY">
                    <p><span className='devName'>Developer:</span> <a target="_blank" href={"https://www.instagram.com/maksim_kikenia/"}>Maxim Kikenia</a></p>
                    <p>© 2023, World Universities Directory</p>
                </div>
            </div>
        </div>
    );
};

export {AboutApp};