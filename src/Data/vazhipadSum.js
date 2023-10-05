const vazhipadTotal=(list)=>{
    let total=0
    list.forEach((item,i)=>{
       total=total+Number(item.vazhipadAmount)


    })
    return total
}

export default vazhipadTotal