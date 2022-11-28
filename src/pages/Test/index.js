import { useState } from 'react'
import './style.css'

const Test = () =>{

    const [openProfile, setOpenProfile] = useState(false)

    function DropDownProfile (){
        return(
            <div className="flex flex-col dropDownProfile">
                    <ul className="flex flex-col gap-4">
                        <li>Profile</li>
                        <li>BJHVHJ</li>
                        <li>gujgfug</li>
                    </ul>
                </div>
        )
    }
    

    return(
            <div>
                <button onClick={() => setOpenProfile((prev)=> !prev)}>Teste</button>
                {
                    openProfile && <DropDownProfile/>
                }
                
            </div>
        )
}

export default Test