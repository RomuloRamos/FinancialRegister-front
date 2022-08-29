import connection from '@/apis/axios/axiosConfig';


export const billsFetch = () =>{

    return async (dispatch, getState)=>{
        console.log("billsFetch called");
        // await dispatch(userFetch());
        const userState = getState().user;
        //console.log("billsFetch found userState: ", userState)
        let response = {
            type: BILLS_FETCH_FAIL,
            payload:"Any user state returned"
        }
        if(userState?.payload?.data?.id){
            //console.log("Action billsFetch - userId fetch: ", userState.payload.data.id);
            response = await connection.get(`/bills/by-owner?id=${userState.payload.data.id}`)
            .then(result =>{
                return(
                    {
                        type:BILLS_FETCH_SUCCESS,
                        payload:result.data
                    }
                );
            })
            .catch(error=>{
                //console.log("houseFetch fail: ",error);
                return { 
                    type: BILLS_FETCH_FAIL,
                    payload:error
                };        
            });
        }
        //console.log("billsFetch success: ",response);
        dispatch({type: response.type, payload: response.payload});
        // const response = await connection.get(`/bills/by-owner?id=${DevValues.HouseOwner}`);
        // dispatch({type: BILLS_FETCH_SUCCESS, payload: response.data});
    };

}

export const billsCreate = (billData)=>{
    //console.log("Action billsCreate - billData: ",billData);
    return (
        async(dispatch, getState)=>{
            // const userState = getState().user;
            // if(userState?.payload?.data?.id){
            //     //console.log("Action billsCreate - userId fetch: ", userState);
            //     const userHouses = getState().houses;
            //     if(userHouses?.payload){
            //         //console.log("Action billsCreate - Houses fetch: ", userHouses);
            //     }
            // }
            const result = await connection.post('bills', billData)
            .then(response =>{
                //console.log("createHouse Success: ", response);
                return { 
                        type: BILLS_CREATE_SUCCES,
                        value: response.request
                    };    
            })
            .catch((error)=>{
                //console.log("createHouse ERROR: ", error);
                return { 
                        type: BILLS_CREATE_FAIL,
                        value:error
                    };
            }); 
            //console.log("createHouse dispatch: ", result);
            dispatch({type: result.type, payload: result.value});
        }
    );

}