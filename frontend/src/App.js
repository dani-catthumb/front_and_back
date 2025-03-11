import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import SpecificEmployeeData from './SpecificEmployeeData';
import config from './config.json'

const BackendURL = config.BACKEND_URL;


function App() {
    const [selectedID, setSelectedID] = useState(1);
    return (
        <div>
            <SpecificEmployeeData employeeID={selectedID} BackendURL={BackendURL} />
            <EmployeeList setSelectedID={setSelectedID} BackendURL={BackendURL} />
            <footer>table styling inspired by <a href="https://codepen.io/zachsaffrin/pen/oNraGw">Zach Saffrin</a></footer>
        </div>
    );
}

export default App;
