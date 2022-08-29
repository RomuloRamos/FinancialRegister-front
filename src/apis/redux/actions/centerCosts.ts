import connection from '@/apis/axios/axiosConfig';

export const houseFetch = () =>{
    //console.log("houseFetch called")
    return(
        async(dispatch, getState) =>{
            await dispatch(userFetch());
            const userState = getState().user; 
            //console.log("houseFetch found userState: ",userState)
            if(userState?.payload?.data?.id){
                //console.log("Action houseFetch - userId fetch: ", userState.payload.data.id);
                const response = await connection.get(`/houses/user-houses?id=${userState.payload.data.id}`)
                .then(result =>{
                //console.log("houseFetch success: ",result);
                return(
                    {
                        type:HOUSE_FETCH_SUCCESS,
                        payload:{
                            data: result.data,
                            status: result.status,
                            statusText: result.statusText
                        }
                    }
                    );
                })
                .catch(error=>{
                    //console.log("houseFetch fail: ",error);
                    return { 
                        type: HOUSE_FETCH_FAIL,
                        payload:error
                    };
                    
                });
                dispatch({type: response.type, payload: response.payload});
            }
        }
    );
}

export const houseCreate = (houseData) =>{ 
    console.log("Action createHouse called.");
    return(
        async(dispatch, getState) =>{

            await dispatch(userFetch());
            const userState = getState().user;
            let response = {
                type: HOUSE_CREATE_FAIL,
                payload:"Any user state returned"
            }
            if(userState?.payload?.data?.id){
                const objAddress = {
                    street:houseData.street,
                    number:houseData.number,
                    neighborhood:houseData.neighborhood,
                    postal_code:houseData.postal_code,
                    complemento:houseData.complemento,
                };
                const objHouse = {
                    // id:houseData.id,
                    name: houseData.name,
                    houseAddress:{...objAddress},
                    author:userState.payload.data.id
                }
                response = await connection.post('houses', objHouse)
                .then(result =>{
                    return(
                        {
                            type:HOUSE_CREATE_SUCCESS,
                            payload:result.request
                        }
                    );
                })
                .catch(error=>{
                    //console.log("houseFetch fail: ",error);
                    return { 
                        type: HOUSE_CREATE_FAIL,
                        payload:error
                    };        
                });
            }
            //console.log("billsFetch success: ",response);
            dispatch({type: response.type, payload: response.payload});
        }
    );
}
export const houseUpdate = (houseData) =>{ 
    console.log("Action houseUpdate called.");
    return(
        async(dispatch, getState) =>{

            await dispatch(userFetch());
            const userState = getState().user;
            let response = {
                type: HOUSE_UPDATE_FAIL,
                payload:"Error: Any user state found"
            }
            if(userState?.payload?.data?.id){
                const objAddress = {
                    street:houseData.street,
                    number:houseData.number,
                    neighborhood:houseData.neighborhood,
                    postal_code:houseData.postal_code,
                    complemento:houseData.complemento,
                };
                const objHouse = {
                    id:houseData.id,
                    name: houseData.name,
                    houseAddress:{...objAddress},
                    author:houseData.author
                }
                response = await connection.put('houses', objHouse)
                .then(result =>{
                    return(
                        {
                            type:HOUSE_UPDATE_SUCCESS,
                            payload:result.request
                        }
                    );
                })
                .catch(error=>{
                    //console.log("houseFetch fail: ",error);
                    return { 
                        type: HOUSE_UPDATE_FAIL,
                        payload:error
                    };        
                });
            }
            //console.log("billsFetch success: ",response);
            dispatch({type: response.type, payload: response.payload});
        }
    );
}