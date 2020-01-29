import React from 'react';

class Robot extends React.Component {
    
    deleteRobot = () => {
        this.props.onDelete(this.props.item.id);
    }
    
    render() {
        let { item } = this.props;
        return (
            <div>
                <input type="button" value="delete" onClick={this.deleteRobot}/>
            </div>
        )
    }
}

export default Robot;