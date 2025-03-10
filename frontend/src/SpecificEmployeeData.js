import React, { useEffect, useState } from 'react';

function SpecificEmployeeData({ employeeID, BackendURL }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let URL = `${BackendURL}/api/list/${employeeID}`;

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

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>jobTitle</th>
                        <th>phoneNumber</th>
                        <th>emailAddress</th>
                        <th>address</th>
                        <th>department</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.jobTitle}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.emailAddress}</td>
                        <td>{data.address}</td>
                        <td>{data.department}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SpecificEmployeeData;
