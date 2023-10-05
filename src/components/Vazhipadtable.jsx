import vazhipadSum from "../Data/vazhipadSum"


const VazhipadTable=(props)=>{
    const {vazhipadList}=props
return(
    <div className="table">

        <table>
            <thead>
                <tr>
                <th>NAME</th>
                <th>NAALU</th>
                <th>VAZHIPAD NAME</th>
                <th>VAZHIPAD AMOUNT</th>
                </tr>

                
            </thead>

            <tbody>
                {
                   vazhipadList.map((list,i)=>{
                    return <tr>
                        <td>{list.name}</td>
                        <td>{list.naalu}</td>
                        <td>{list.vazhipadName}</td>
                        <td>{list.vazhipadAmount}</td>
                    </tr>
                   })
                }
            </tbody>
        </table>
        <h1>TOTAL AMOUNT: {vazhipadSum(vazhipadList)}</h1>

    </div>
)


}

export default VazhipadTable