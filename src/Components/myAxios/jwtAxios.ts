import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InplZXYgbWluZGFsaSIsImlhdCI6MTUxNjIzOTAyMiwicm9sZSI6ImFkbWluIn0.JoPfqREXtDv9XRihx2KugcwgLsNsPgcutosL5yZOE2o";
const jwtAxios = axios.create();


jwtAxios.interceptors.request.use(request=>{
    // request.headers={
    //     "authorization" : "Barer "+token
    // };

    return request;
});

jwtAxios.interceptors.response.use(response=>{

    response = response.data.result.records[0];
    return response;
})

export default jwtAxios;