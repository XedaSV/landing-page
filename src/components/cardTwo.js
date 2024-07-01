import { Link ,useNavigate, useParams} from "react-router-dom";

function CardTwo (props){
console.log(props.plan)
    return(
        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">{props.plan.name}</h6>
                                </div>
                                <div class="card-body">
                                <div className="shadow p-3 mb-5 bg-body-tertiary">

                               
                                    <p className="shadow p-3 mb-5 bg-body-tertiary">{props.plan.description}</p>
                                     <p className="shadow p-3 mb-5 bg-body-tertiary">{props.plan.amount}</p>
                                    <p class ="m-0 font-weight-bold text-primary">Referral Reward : {props.plan.royalty} %</p>
                                    </div> <Link to={`/subscribe/${props.plan._id}`}>
                                      <a href="#" class="btn btn-facebook btn-block"><i
                                            class="fab fa-facebook-f fa-fw"></i> Subscribe</a>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
    )
}
export default CardTwo;