export const errorHandler=(statusCode,message)=>{
    const error =new Error();
    error.statusCode= statusCode;
    error.message= message;
    return error;
}
// const successHandler=(data,statusCode=200) =>({
//   status:true,
//   data:data,
//   statusCode:statusCode
// });
