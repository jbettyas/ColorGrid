import React, { Component } from 'react';
import { Card, CardText, CardBody, Button, Row, Col, Container } from 'reactstrap';

const RenderColorSelection = (props) => {

    return <Container>

        <Row>

    {props.colors.filter((item,index) => index>props.startColor && index<props.startColor + props.count + 1).map((item) => {
        return (
            <div className="col-12 col-md-3" style={{ padding: 20 }}>
            <Card key={item.id} style={{ width: 150 }}
                onClick={() => props.onColorSelect(item, item.id)}>
                <CardBody style={{ backgroundColor: item.color, borderColor: '#333', height: 150 }}></CardBody>
                <CardBody>
                    <CardText>{item.color}</CardText>
                </CardBody>
            </Card>
            </div>
        )
    })}
    </Row>

    <Row>
        <Col className="col-12 m-1 text-center">
            <Button color="link" onClick={()=>props.changeStartColor(0)}>1</Button>
            <Button color="link" onClick={()=>props.changeStartColor(12)}>2</Button>
            <Button color="link" onClick={()=>props.changeStartColor(24)}>3</Button>
            <Button color="link" onClick={()=>props.changeStartColor(36)}>4</Button>
            <Button color="link" onClick={()=>props.changeStartColor(48)}>5</Button>
            <Button color="link" onClick={()=>props.changeStartColor(60)}>6</Button>
            <Button color="link" onClick={()=>props.changeStartColor(72)}>7</Button>
            <Button color="link" onClick={()=>props.changeStartColor(84)}>8</Button>
            <Button color="link" onClick={()=>props.changeStartColor(96)}>9</Button>
        </Col>
    </Row>

    </Container>

}

class ColorGrid extends Component {

    constructor(props) {
        super(props);

        this.pageSize = 12;
        this.pagesCount = Math.ceil(100 / this.pageSize);

        this.state = {
            selectedColor: null,
            selectedColorId: null,
            colorStart: 0,
            colorsPerPage: 12
        }
    }

    componentDidMount(){
        this.setState({colorset: this.props.colors})
      }

    changeStartColor=(index)=>{
        this.setState({ colorStart: index });
    }

    onColorSelect(color, id) {
        this.setState({ selectedColor: color });
        this.setState({ selectedColorId: id });
    }

    onColorClear() {
        this.setState({ selectedColor: null });
        this.setState({ selectedColorId: null });
    }

    renderColor(color, allColors) {

        //console.log(color);
    
        this.state.selectedColorId = (this.props.random != null) ? this.props.random : this.state.selectedColorId;

        var h = (this.state.selectedColorId-2 === -2) ? 98 : (this.state.selectedColorId-2 === -1) ? 99 : this.state.selectedColorId-2;
        var i = (this.state.selectedColorId-1 === -1) ? 99 : this.state.selectedColorId-1;
        var j = this.state.selectedColorId;
        var k = (this.state.selectedColorId+1 === 100) ? 0 : this.state.selectedColorId+1;
        var l = (this.state.selectedColorId+2 === 101) ? 1 : (this.state.selectedColorId+2 === 100) ? 0 : this.state.selectedColorId+2;

        if (color != null)
            return(

                //console.log(h, i, j, k, l),

                <div className="container">
                    <Card style={{ width: '100%', marginBottom: 50 }}>
                        <CardBody style={{ backgroundColor: allColors[j].color, borderColor: '#333', height: 400 }}></CardBody>
                        <CardBody>
                            <CardText>{allColors[j].color}</CardText>
                        </CardBody>
                    </Card>

                    <Row>
                        <Col>
                            <Card style={{ width: 120 }}>
                                <CardBody style={{ backgroundColor: allColors[h].color, borderColor: '#333', height: 150 }}></CardBody>
                                <CardBody>
                                    <CardText>{allColors[h].color}</CardText>
                                </CardBody>
                            </Card>
                        </Col><Col>
                            <Card style={{ width: 120 }}>
                                <CardBody style={{ backgroundColor: allColors[i].color, borderColor: '#333', height: 150 }}></CardBody>
                                <CardBody>
                                    <CardText>{allColors[i].color}</CardText>
                                </CardBody>
                            </Card>
                        </Col><Col>
                            <Card style={{ width: 120 }}>
                                <CardBody style={{ backgroundColor: allColors[j].color, borderColor: '#333', height: 150 }}></CardBody>
                                <CardBody>
                                    <CardText>{allColors[j].color}</CardText>
                                </CardBody>
                            </Card>
                        </Col><Col>
                            <Card style={{ width: 120 }}>
                                <CardBody style={{ backgroundColor: allColors[k].color, borderColor: '#333', height: 150 }}></CardBody>
                                <CardBody>
                                    <CardText>{allColors[k].color}</CardText>
                                </CardBody>
                            </Card>
                        </Col><Col>
                            <Card style={{ width: 120 }}>
                                <CardBody style={{ backgroundColor: allColors[l].color, borderColor: '#333', height: 150 }}></CardBody>
                                <CardBody>
                                    <CardText>{allColors[l].color}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </div>

            );
        else
            return(
                <div></div>
            );
    }

    render() {
        
        if (this.state.selectedColor == null && this.props.random == null)
            return(
            <div className="container">
                <div className="row" style={{marginTop: '20px'}}>
                    <RenderColorSelection onColorSelect={(color, id)=>this.onColorSelect(color, id)} changeStartColor={(color)=>this.changeStartColor(color)} startColor={this.state.colorStart} count={this.state.colorsPerPage} colors={this.props.colors}/>
                </div>
            </div>
            );
        else if (this.state.selectedColor != null && this.props.random == null)
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 m-1">
                            {this.renderColor(this.state.selectedColor, this.props.colors)}
                        </div>
                    </div>

                    <div className="col-12 m-1 text-center">
                        <Button outline color="secondary" style={{ backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', width: '200px' }}
                            onClick={() => this.onColorClear()}>Clear</Button>
                    </div>
                </div>
            );

        else if (this.props.random != null)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 m-1">
                        {this.renderColor(this.props.random, this.props.colors)}
                    </div>
                </div>

                <div className="col-12 m-1 text-center">
                    <Button outline color="secondary" style={{ backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', width: '200px' }}
                        onClick={() => this.props.onRandomClear()}>Clear</Button>
                </div>
            </div>
        );
    }

}

export default ColorGrid;