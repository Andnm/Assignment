import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class DishDetail extends Component {
//     renderDish(dish) {
//         return (
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }
//     renderComments(comments) {
//         if (comments != null)
//             return (
//                 <div className='text-left col-12 col-md-5 m-2'>
//                     <h3 className='mb-3'>Comments</h3>
//                     <div>
//                         {comments.map((item) => {
//                             var date = new Date(item.date);
//                             return (
//                                 <div key={item.id} className='mb-3 font-weight-bold'>
//                                     <CardText>{item.comment}</CardText>
//                                     <span>
//                                         --{item.author}, {date.toDateString()}
//                                     </span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }

//     render() {
//         if (this.props.dish != null) {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
// }

// export default DishDetail;


function RenderDish({ dish }) {
    return (
        <div className='col-12 col-md-5 m-1 text-left'>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle className='font-weight-bold'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div className='col-12 col-md-5 m-1 text-left'>
                <h3>Comments</h3>
                <div>
                    {comments.map(comment => {
                        var date = new Date(comment.date);
                        return (
                            <div key={comment.id} className='mb-3 font-weight-bold'>
                                <CardText>{comment.comment}</CardText>
                                <span>
                                    --{comment.author},{date.toString()}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        {props.dish.name}
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-10 col-md-5 m-1'>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
export default DishDetail;
