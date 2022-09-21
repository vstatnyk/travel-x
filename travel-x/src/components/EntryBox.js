import React from 'react'




const EntryBox = (props) => {

    
    const handleClick = (e)=> {
        const SSNum = e.target.ssn.value;
        console.log(SSNum);
    }

    return (
        <form onSubmit={handleClick}>
            <label>
                {props.text}
                <input type="text" name="ssn" placeholder='xxx-xx-xxxx'/>
                </label>
                <button>GO</button>
        </form>
    )
  }

  
  export default EntryBox
