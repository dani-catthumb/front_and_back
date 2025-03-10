import React, { useEffect, useState } from 'react';

function EmployeeList({ setSelectedID, BackendURL }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URL = `${BackendURL}/api/list`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [URL]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    function clickEmployeeHandler(event) {
        const selectedID = event.nativeEvent.target.attributes["itemid"].value;
        setSelectedID(selectedID);
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td itemID={item.id} onClick={clickEmployeeHandler}>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
