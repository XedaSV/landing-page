import axios from 'axios';
//

const api =   axios.create(
    {
        baseURL: "http://localhost:5001/api/"
    }

);

export function get_all_plan(){
    // rest of code
    const token = localStorage.getItem('token');
    if (!token) {
      //  navigate('/login');
    }
   // const responses =
     api.get('/plans', {
        headers: { Authorization: `Bearer ${token}` },
      }).then(res => {
        console.log(res.statusText, "get_all_plan");
        if (res.statusText === "OK")
         {
           
           console.log(res.data, "pl d");
           return  res.data.plans;
         }
         else {

         }
        }).catch(error => {
            console.log(error);
          
         });

  };