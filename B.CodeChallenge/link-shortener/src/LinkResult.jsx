import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'

const LinkResult = ({inputValue, typeLink}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    console.log(typeLink)
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            
            if(typeLink===1){
                setShortenLink(res.data.result.short_link);
        
            }else if(typeLink===2){
                setShortenLink(res.data.result.short_link2);
            }else if(typeLink===3){
                setShortenLink(res.data.result.short_link3);
            }

        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        if(inputValue.length){
            fetchData()
        }
    }, [inputValue, typeLink])
    if(loading) {
        return <p className="noData">Loading...</p>
    }
    if(error){
        return <p className="noData">Something went wrong</p>
    }
    return (
        <>
        {shortenLink && (
            <div className="result">
                <p>Link generated!</p>
                <p className="final">{shortenLink}</p>
                
            </div>
        )}
        </>
        
    )
}
export default LinkResult