import React , {Component } from 'react';
import {Card,CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Row,Col} from 'reactstrap';


class Detail extends Component {
    constructor(props){
        super(props);

        this.state={
           
        }

    };

    ondishChange(dish){

    }


    render() {
        if(this.props.dish != null){  
            const Comments=this.props.dish.comments.map((comment) =>{
                return(
                     <div>
                        <p>{comment.comment}</p>      
                        <p>--{comment.author} , {comment.date}</p> 
                        <br/>
                    </div>                     
                );
            });        
            return(
                <div className="container">
                    <div className="row">
                        <div className="coll-12 col-md-5 m-1">
                                 <Card >
                                    <CardImg  width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                     <CardBody>
                                          <CardTitle>{this.props.dish.name}</CardTitle>  
                                          <CardText>{this.props.dish.description}</CardText>  
                                     </CardBody>
                                </Card>   
                        </div>  
                        <div className="coll-12 col-md-5 m-1">
                            <h2>Comments of {this.props.dish.name}</h2>
                            {Comments}                 
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="coll-12 col-md-5 m-1">
                      <Card >
                        <CardBody>
                            <CardTitle>NO Card Selected</CardTitle>  
                            <CardText>This is no Card Selected</CardText>  
                        </CardBody>
                    </Card>
                </div>
            )
        }
    };   
}
export default Detail;