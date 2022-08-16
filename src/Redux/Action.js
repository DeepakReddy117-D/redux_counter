// Creating Action
export const increase=()=>(
    { type :"INCREASE",
}
) 


export const decrease=()=>(
    {type :"DECREASE",
    }
)

export const increaseByAmount=(inp)=>(
            {type :"INCREASEBYAMOUNT",
    payload:inp}
)