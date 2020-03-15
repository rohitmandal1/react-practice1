import React,{useState} from 'react'

function Hooksarray() {
    const [item, setitem] = useState([])
    const additem = () =>{
        setitem([...item,{
            id: item.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={additem}>Add a item</button>
          <ul>
              {
                  item.map(item => <li key={item.id}>{item.value}</li>)
              }
          </ul>  
        </div>
    )
}

export default Hooksarray
