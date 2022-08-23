

export const userFetch = () =>{
    console.log("userFetch called");    
    return async (dispatch, getState)=>{
        const authData = getState().auth;
        console.log("userFetch auth data: ", authData);
        try {
            const response = await connection.get(`/users?id=${authData.payload.sub}`)
            .then(result =>{
              //console.log"userFetch success: ",result);
                return(
                    {
                        type:USER_FETCH_SUCCESS,
                        payload:{
                                    data: result.data,
                                    status: result.status,
                                    statusText: result.statusText
                        }
                    }
                );
            })
            .catch(error=>{
              //console.log"userFetch fail: ",error);
                return { 
                    type: USER_FETCH_FAIL,
                    payload:error
                };
    
            });
            
            dispatch({type: response.type, payload: response.payload});
        } catch (error) {
            // console.log("error: ", error.message);
            const response = {
                type:USER_FETCH_FAIL,
                payload:{
                    data:error.message
                }
            }
            dispatch({type: response.type, payload: response.payload});               
        }
    }
}
export const userCreate = (userData) =>{
    return(
        async(dispatch, getState) =>{

            //console.log("userUpdate: ", userData);
            const response = await connection.post('users', {...userData})
            .then(result =>{
            //   console.log("userCreate Success: ", result);
                return { 
                        type: USER_CREATE_SUCCESS,
                        payload:{
                            data: result.data,
                            status: result.status,
                            statusText: result.statusText
                        }
                    };    
            })
            .catch((error)=>{
              console.log("userCreate ERROR: ", error);
                return { 
                        type: USER_CREATE_FAIL,
                        payload:error
                    };
            }); 
            console.log("userUpdate dispatch: ", response);
            dispatch({type: response.type, payload: response.payload});
        }
    );
}

export const userUpdate = (userData) =>{
    return(
        async(dispatch, getState) =>{

            //console.log("userUpdate: ", userData);
            const response = await connection.put('users', {...userData, cpf:"aaaaaa"})
            .then(result =>{
            //   console.log("userUpdate Success: ", result);
                return { 
                        type: USER_UPDATE_SUCCESS,
                        payload:{
                            data: result.data,
                            status: result.status,
                            statusText: result.statusText
                        }
                    };    
            })
            .catch((error)=>{
              console.log("userUpdate ERROR: ", error);
                return { 
                        type: USER_UPDATE_FAIL,
                        payload:error
                    };
            }); 
            console.log("userUpdate dispatch: ", response);
            dispatch({type: response.type, payload: response.payload});
        }
    );
}