import api from '../api/defaultRequest';
import { Link ,useNavigate} from "react-router-dom";
import { useState ,useEffect} from 'react';

function CardOne (props){
    const navigate = useNavigate();
     const tasks = props.obj;
     const [isLoading, setIsLoading] = useState(true);


     
     console.log(tasks,"tasks");
     const headers = [ "Name","Description","Reward", "Link"];
     const token = localStorage.getItem('token');  
     const IhavePaid = async (value) => {
        console.log( "i have it here sub");
        console.log(value , "data.deposit._id");
       // setData();
         await api.get(`/task/complete/${value}`, {  headers: { Authorization: `Bearer ${token}` },})
                                                        .then(res => {
                                                            console.log(res.statusText, " sub");
                                                            if (res.statusText === "OK")
                                                            {
                                                                
                                                                console.log(res.data, " sb");
                                                               // window.location.reload();
                                                                return  res.data;
                                                            }
                                                            else {
                                                                console.log(res.data,"sub rrr");
                                                            }
                                                            return res.data;
                                                        })
                                                        .catch(error => {
                                                                console.log(error, "sub rrr");
                                                                navigate('/login');
                                                        });
                   
                    
      };

      function handleClick(link, id) {
  
        //IhavePaid(id);
        console.log(id,"p-id");
        console.log(link,"ld-id");

         api.get(`/task/complete/${id}`, {  headers: { Authorization: `Bearer ${token}` },})
        .then(res => {
            console.log(res.statusText, " sub");
            if (res.statusText === "OK")
            {
                
                console.log(res.data, " sb");
                window.location.href = link;
                return  res.data;
            }
            else {
                console.log(res.data,"sub rrr");
            }
            return res.data;
        })
        .catch(error => {
                console.log(error, "sub rrr");
                navigate('/login');
        });
        // Perform asynchronous action



         
      }
    //  const send = (event) =>{
    //     event.preventDefault();
    //     console.log(event.target.value, "value");
    //      IhavePaid(event.target.value);

    // }
    return (

        <div className="card shadow mb-4">
                                          <div className="card-header py-3">
                                              <h6 className="m-0 font-weight-bold text-primary text-center">Tasks of the day</h6>
                                          </div>
                                          <div className="card-body">
                                              <div className="table-responsive">
                                                  <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                      <thead>
                                                          
                                                             {
                                                                <tr>
                                                                {headers.map((item)=>{
                                                                    return(

                                                                        <th>{item}</th>
                                                                    );
                                                                })}
                                                                 </tr>
                                                             
                                                             }
                                                          
                                                      </thead>

                                                      <tbody>
                                                    
                                                    {
                                                        tasks.map((items)=>{
                                                           return(
                                                            <tr>
                                                                   <td> {items.name}</td>
                                                                   <td>{items.description}</td>
                                                                   <td>₦ { items.reward}</td>
                                                                   <td> 
                                                                   {/* <Link to={items.link}>
                                                                        <a href="#" class="btn btn-facebook btn-block"><i
                                                                                class="fab fa-facebook-f fa-fw"></i> Perform task</a>
                                                                     </Link> */}
                                                                    <button  onClick={() => handleClick(items.link, items._id)} >Click here</button> 
                                                                    </td>
                                                                  
                                                          </tr>)
                                                      
                                                        })
                                                    }
                                                      </tbody>
                                                  </table>
                                              </div>
                                          </div>
                                      </div>
    )
}
export default CardOne;