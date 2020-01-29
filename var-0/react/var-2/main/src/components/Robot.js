import React from 'react';

class Robot extends React.Component{
    
    handleClickButton=(event)=>{
        this.props.onDelete(this.props.item.id);
    }
    render(){
        //aici cu const fac valid props
        const {item}=this.props;
        return(
            <div>
            //daca avem nev sa afisam facem asta
            Hi {item.name}
            <input type="button" value="delete" onClick={this.handleClickButton}/>
            </div>
            );
    }
}
export default Robot;