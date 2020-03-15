import React,{useState} from 'react'

function Hooksobject() {
const [name, setname] = useState({first: '', last: ''})
    return (
        <div>
            <input type="text" value={name.first || ""} onChange={e => setname({ ...name, first: e.target.value})}  />&nbsp;
            <input type="text" value={name.last || ""} onChange={e => setname({...name, last: e.target.value})}  />
            <h2>Your First name is - {name.first}</h2>
            <h2>Your Last name is - {name.last}</h2>
        </div>
    )
}

export default Hooksobject
