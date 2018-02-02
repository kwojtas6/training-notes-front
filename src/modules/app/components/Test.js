import React, { Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

class Test extends Component {
    render() {
        return (<AppBar
                title="Training notes"
                iconElementLeft={<IconButton><FontIcon className="material-icons">fitness_center</FontIcon></IconButton>}
            />);
    }
}

export default Test;