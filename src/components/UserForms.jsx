import VAZHIPAD from "../Data/vazhpadInfo";
import Naalu from "../Data/naaluInfo";
import "./userForm.css";
import { useState } from "react";


const UserForms=(props)=>{
    const {setvazhipadList,vazhipadList}=props
 const [name,setName]=useState('')
 const [naalu,setNaalu]=useState('')
 const [vazhipad,setVazhipad]=useState('')
 const [vazhipad_obj,setVazhipad_obj]=useState('')




 
const handleName=(a)=>{
    setName(a.target.value)
}
const handleNaalu=(a)=>{
    setNaalu(a.target.value)
}
const handleVazhipadu=(a)=>{
    
    setVazhipad(a.target.value)
}
const handleSubmit=(a)=>{
    a.preventDefault()
    const vazhipad_obj=JSON.parse(vazhipad)
    setVazhipad_obj(vazhipad_obj)
    const vazhipadarr={
        name:name,
        naalu:naalu,
        vazhipadName:vazhipad_obj.name,
        vazhipadAmount:vazhipad_obj.amount,
    }
    setvazhipadList((previousValue)=>{
        return [...previousValue,vazhipadarr]
    })
    setName('')
    setNaalu('')
    setVazhipad('')



    
   
}

const handlereset=()=>{
    setName('')
    setNaalu('')
    setVazhipad('')
}

    return(
        <form onSubmit={handleSubmit} onReset={handlereset}>
            <input type="text" placeholder="Enter name"value={name} onChange={handleName} />
            <select value={naalu} onChange={handleNaalu} >
                <option>Enter Naalu</option>
                {Naalu.map((naalu,i)=>{
                    return  <option value={naalu} key={i}>
                              {naalu}
                    </option>
                })}
               
            </select >
            <select value={vazhipad} onChange={handleVazhipadu}>
                <option>select vazhipadu </option>
                {VAZHIPAD.map((vazhipad,i)=>{
                     return  <option  value={JSON.stringify(vazhipad)}key={vazhipad.id}>
                        
                        {vazhipad.name}
                     </option>

                })}
                
            </select>
            <div className="btn">
            <button type="submit">OK</button>
            <button type="reset">CANCEL</button>
            </div>
            
           
        </form>
    );
};
export default UserForms