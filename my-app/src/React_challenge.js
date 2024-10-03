import { useState } from "react";
import data from "./info.json";

export default function ReactChallenge() {

    const [itemsAllowedPerPage, setItemsAllowedPerPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    const changePage = (e) => {
        /*
         50    10    5  click 1 = 10
         50    10    5  click 2 = 20

        */ 
        console.log('this is ', e.target.value);
        const value = e.target.value * itemsAllowedPerPage
        setPageNumber(value)
        console.log('value is', value);
    };

    // 50  page : 1 50 / 10 * 1

    return (
        <>
            <div>
                <select value={itemsAllowedPerPage} onChange={e => setItemsAllowedPerPage(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value={10}>Option 1</option>
                    <option value={20}>Option 2</option>
                    <option value={30}>Option 3</option>
                </select>
                <p>Selected value: {itemsAllowedPerPage}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50px' }}>
                <button onClick={changePage} value={1}>1</button>
                <button onClick={changePage} value={2}>2</button>
                <button onClick={changePage} value={3}>3</button>
                <button onClick={changePage} value={4}>4</button>
                <button onClick={changePage} value={5}>5</button>
            </div>
            <table>
                <tr>
                    <th>Country</th>
                    <th>City</th>
                </tr>
                {pageNumber&& data.slice(pageNumber -10 , pageNumber ).map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.country}</td>
                            <td>{val.city}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}