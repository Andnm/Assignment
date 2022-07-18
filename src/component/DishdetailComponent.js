import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                        <CardText><h6>{dish.description}</h6></CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null)
            return (
                <div className='text-left card-deck ml-1 h-[540px]'>
                    <h3 className='mb-3'>Comments</h3>
                    <div>
                        {dish.comments.map((item) => {
                            var date = new Date(item.date);
                            return (
                                <div key={item.id} className='mb-3 font-weight-bold'>
                                    <CardText>{item.comment}</CardText>
                                    <span>
                                        --{item.author}, {date.toDateString()}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className="text-left font-weight-bold">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;