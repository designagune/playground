import React,{ useState, useEffect } from "react";
import axios from "axios";

const AxiosFilter = () => {
    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchUser = async () => {
        try{
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        }catch(error){
            setError(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchUser();
    },[]); 

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error!</div>;
    if(!users) return null;

    const filteredResult = users.filter( val => val.id === 1);
    console.log(filteredResult);
    return (
        <>
            <ul>
                {
                    filteredResult.map( val => <li>{val.name}</li>
                    )
                }
            </ul>
            <button onClick={fetchUser}>RELOAD</button>
        </>
    );
}

export default AxiosFilter;