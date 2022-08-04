import { useState } from "react";

export default function useRefetchData(url){
    const [data,setData] = useState([])
    try {
        (
            async () => {
                const res = await fetch(url);
                const data = await res.json();
                setData(data)
            }
        )()
    } catch (err) {
        console.log(err);
    }
    return [data];
}