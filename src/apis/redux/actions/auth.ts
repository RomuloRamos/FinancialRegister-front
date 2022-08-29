import connection from '@/apis/axios/axiosConfig';

export const oauthRecovery = () => {
    console.log("oauthRecovery called")

    return async(dispatch)=>{
            const accessToken = localStorage.getItem("accessToken");
            const strUserData = localStorage.getItem("userData");
            const userData = JSON.parse(strUserData);
            if(accessToken && userData){
                const contextRecovered = {
                    type:SIGN_IN,
                    payload:{
                                data: {userData}, 
                                status: 0,
                                statusText: "RECOVERED"
                    }
                }
                dispatch(
                    contextRecovered
                );
    
            }
    }
}

export const oauthValidation = (res)=>{
    console.log("oauthValidation called")
    return async(dispatch, getState)=>{
        const response = await connection.post(`/oauth`,{code:res?.code})
        .then(result=>{
            console.log("oauthValidation: ", result);
            return(
                {
                    type:SIGN_IN,
                    payload:{
                                data: result.data,
                                status: result.status,
                                statusText: result.statusText
                    }
                }
            );
        })
        .catch(error=>{
          console.log("oauthValidation fail: ",error);
            return { 
                type: SIGN_OUT,
                payload:error
            };

        });
        dispatch({type: response.type, payload: response.payload});
    }
}