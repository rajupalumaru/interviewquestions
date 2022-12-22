import React, { useEffect, useState } from 'react';


const Search = () => {

    const [data, setData] = useState("");

    const obj = [{
        employeeName: "Raju",
        salary: 40000,
        id: 1
    }, {
        employeeName: "Ramu",
        salary: 50000,
        id: 2
    }, {
        employeeName: "Somu",
        salary: 60000,
        id: 3
    }]

    const handleChange = (e) => {
        const value = e.target.value;
        // const res = data.filter(() => setData(value));  

    }
    useEffect(() => {
         setData(obj);
    }, [data])

    return (

        <div>
            <input onChange={handleChange} placeholder='search' />
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>salary</th>
                </thead>
                <tbody>
                    {data.length > 1 && data.map((ele) => {
                        return (
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.employeeName}</td>
                                <td>{ele.salary}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Search;