import React,{Component} from "react";
import "./Main.css";
import Button from "./UI/Button";

class Main extends Component{
    state = {
        counter:0,
    }

    addOneHandler = ()=>{
        this.setState({counter:this.state.counter+1})
    }

    addFiveHandler = ()=>{
        this.setState({counter:this.state.counter+5})
    }

    addResetHandler = ()=>{
        this.setState({counter:0})
    }
    removeOneHandler = ()=>{
        if(this.state.counter <= 1){
            return this.setState({counter:0})
        }
        else{
            this.setState({counter:this.state.counter-1})
        }
        
    }

    removeFiveHandler = ()=>{
        if(this.state.counter <= 5){
            return this.setState({counter:0})
        }
        else{
            this.setState({counter:this.state.counter-5})
        }
        
    }

    render(){
        let circleClass = "";
        if(this.state.counter === 0){
            circleClass = "circle";
        }else if(this.state.counter%2 === 0){
            circleClass = "circle even";
        }
        else{ 
            circleClass = "circle odd";
        }
    return (
        <main className="main">
            <span className={circleClass}>
                <h1>{this.state.counter}</h1>
            </span>
            <div className="buttons">
            {/* <button onClick={this.addFiveHandler} className="btn">Add five</button>
            <button onClick={this.addOneHandler} className="btn">Add one</button>
            <button onClick={this.addResetHandler} className="btn">Reset</button>
            <button onClick={this.removeOneHandler} className="btn">Remove one</button>
            <button onClick={this.removeFiveHandler} className="btn">Remove five</button> */}

            <Button click = {this.addOneHandler} type ="submit">Add one</Button>
            <Button click = {this.addFiveHandler}>Add Five</Button>
            <Button click = {this.addResetHandler}>Reset</Button>
            <Button click = {this.removeOneHandler}>Remove one</Button>
            <Button click = {this.removeFiveHandler}>Remove five </Button>
            </div>
            
        </main>
        )
    }
    

}

export default Main;