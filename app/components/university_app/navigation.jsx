import React, { useState } from "react";
import {Link} from "react-router-dom";

function Navigator() {
    return (
        <nav className="NavigationPanel">
            <Link className={'links'} to="/">Main</Link>
            <Link className={'links'}  to="/about">About</Link>
        </nav>
    );
}

export {Navigator};