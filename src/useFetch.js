import { useEffect, useState } from "react";


const useFetch  = (url) => {

    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        setTimeout( ()=> {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch blogs")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false);
            }).catch((err) => {
                if (err === "AbortError") {
                    console.log("Abort")
                }else{
                    setError(err.message)
                    setIsPending(false);


                }
            })
        }, 3000)
       
        //return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}

}

export default useFetch;