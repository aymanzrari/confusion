import React , {Component } from 'react';
import {Card,CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Row,Col} from 'reactstrap';

class Detail extends Component {
    constructor(props){
        super(props);
    };
    renderComment(comments){
        if(comments != null){
            let options = { year: "numeric", month: "short", day: "numeric" };
            var commentList = comments.map(comment => {
                return (
                    <li key={comment.id}>
                        {comment.comment}
                        <br /><br />
                        -- {comment.author}, &nbsp;
                        {new Date(comment.date).toLocaleDateString("en-US", options)}
                        <br /><br />
                    </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        }else{
            return ( 
                <div>
                    Not Selected 
                </div>
            )
        }
    };
    renderDish(dish){
        if(dish != null){   
            return(
                    <div className="row">
                        <div className="coll-12 col-md-5 m-1">
                                 <Card >
                                    <CardImg  width="100%" src={dish.image} alt={dish.name} />
                                     <CardBody>
                                          <CardTitle>{dish.name}</CardTitle>  
                                          <CardText>{dish.description}</CardText>  
                                     </CardBody>
                                </Card>   
                        </div>  
                        <div className="coll-12 col-md-5 m-1">
                            <h2>Comments of {dish.name}</h2>
                            {this.renderComment(dish.comments)}                 
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
            );
        }
    };   
    render() {
        return(
            <div className="container">
                  {this.renderDish(this.props.dish)}
            </div>
        );
    }
       
}
export default Detail;