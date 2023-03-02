import axios from "axios";

const ROOT_URL = import.meta.env.VITE_API_URL_LOCAL;


export const authGet = async(url) => {
    const result = await axios.post(`${ROOT_URL}/${url}`,
        {
            headers: { authorization: localStorage.getItem("token") }
        }
    );
    if(result.status == 200){
        return result.data;
    }else{
        result.data.msg;
    }
}

export const get = async(url) => {
    const result = await axios.get(`${ROOT_URL}/${url}`);
    if(result.status == 200){
        return result.data;
    }else{
        result.data.msg;
    }
}


export const Post = async(url, data) => {
    const result = await axios.post(`${ROOT_URL}/${url}`, data,
        {
            headers: { authorization: localStorage.getItem("token") }
        }
    );
    if(result.status == 200){
        return result.data;
    }else{
        result.data.msg;
    }
}

export const Put = async(url, data) => {
    const result = await axios.put(`${ROOT_URL}/${url}`, data,
        {
            headers: { authorization: localStorage.getItem("token") }
        }
    );
    if(result.status == 200){
        return result.data;
    }else{
        result.data.msg;
    }
}

export const Delete = async(url, data) => {
    const result = await axios.delete(`${ROOT_URL}/${url}`, data,
        {
            headers: { authorization: localStorage.getItem("token") }
        }
    );
    if(result.status == 200){
        return result.data;
    }else{
        result.data.msg;
    }
}