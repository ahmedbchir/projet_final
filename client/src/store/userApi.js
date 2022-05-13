import axios from "axios";


 export  const   addUserApi =(user)=>{
    const backUrl = "http://localhost:5000"
    console.log("kais")

    
   return  axios({
      method: 'post',
      url: backUrl+'/user/addUser',
      data:{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password:user.password
      }
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
