import axios from "axios";

const ROOT_URL = import.meta.env.VITE_API_URL_LOCAL;


export const authGet = async (url) => {
    const result = await axios.get(`${ROOT_URL}/${url}`,
        {
            headers: { authorization: JSON.parse(localStorage.getItem("token")) }
        }
    );
    if (result.status == 200) {
        return result;
    } else {
        return result;
    }
}

export const get = async (url) => {
    const result = await axios.get(`${ROOT_URL}/${url}`);
    if (result.status == 200) {
        return result;
    } else {
        return result;
    }
}


export const Post = async (url, data) => {
    // console.log(data);
    const result = await axios.post(`${ROOT_URL}/${url}`, data,
        {
            headers: { authorization: JSON.parse(localStorage.getItem("token")) }
        }
    );
    if (result.status == 200) {
        // console.log("result", result);
        return result;
    } else {
        return result;
    }
}

export const Put = async (url, data) => {
    const result = await axios.put(`${ROOT_URL}/${url}`, data,
        {
            headers: { authorization: JSON.parse(localStorage.getItem("token")) }
        }
    );
    if (result.status == 200) {
        return result;
    } else {
        return result;
    }
}

export const Delete = async (url) => {
    const result = await axios.delete(`${ROOT_URL}/${url}`,
        {
            headers: { authorization: JSON.parse(localStorage.getItem("token")) }
        }
    );
    if (result.status == 200) {
        return result.data;
    } else {
        return result;
    }
}