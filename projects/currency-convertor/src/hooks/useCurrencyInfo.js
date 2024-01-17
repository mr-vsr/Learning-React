import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({}) //This is the field where all the data coming form the api call will be stored and returned from data.Initially it is an empty object.
    //Using useEffect to send an api call and as fetch returns a promise we are using then() and giving it a call back where the response of the api call is getting converted to json format after that using one more then to perform the tasks in a sequential manner to set the data with the response of the api required and we need to fetch everytime the currency value is changed therefore we have currency in the dependency array of the useEffect.
    //The code inside this block will be executed when the component mounts (initial render) and whenever the value of currency changes.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    
    return data;
}

export default useCurrencyInfo;