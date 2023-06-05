export const url = "https://mepe-laozen-store.onrender.com/api"


export const setHeaders = ()=>{
    const headers = {
        headers:{
            "x-auth-token": localStorage.getItem("token")
        },
    }

    return headers;
}