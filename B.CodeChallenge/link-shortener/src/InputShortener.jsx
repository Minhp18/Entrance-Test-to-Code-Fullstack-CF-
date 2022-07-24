import React from "react";
import { useState } from "react";
const InputShortener = ({setInputValue, setTypeLink}) => {
    const [value, setValue] = useState("")
    const handleClick1 = () => {
        setInputValue(value)
        setTypeLink(1)
        setValue("")
    }
    const handleClick2 = () => {
        setInputValue(value)
        setTypeLink(2)
        setValue("")
    }
    const handleClick3 = () => {
        setInputValue(value)
        setTypeLink(3)
        setValue("")
    }
    return(
        <div className="inputContainer">
            <h1>The <span>privacy-friendly</span> URL Shortener</h1>
            <div className="container-rows">
                <p>Link Shortener</p>
                <div className="row1">
                    <label htmlFor="">Enter a link: </label>
                    <input type="text" placeholder="example.com" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <div className="row2">
                    <label htmlFor="">Short domain: </label>
                    <button onClick={handleClick1} className='btn-tl'>shrtco.de</button>
                    <button onClick={handleClick2} className='btn-tl'>9qr.de</button>
                    <button onClick={handleClick3} className='btn-tl'>shiny.link</button>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla exercitationem aperiam veritatis quis dolore. Inventore adipisci autem molestiae labore ex placeat ipsam mollitia minima eos nesciunt, voluptate, ut exercitationem?
            </div>
        </div>
    )
}
export default InputShortener