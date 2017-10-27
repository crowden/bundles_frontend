import React from 'react';
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class CrudIndexSorter extends React.Component {
    render(){
        let json = JSON.parse(document.querySelector('#js-sorting').dataset.options);
        let base_url = json.base_url;
        let paths = json.paths;

        return (
            <DropdownButton title={this.props.title} id={this.props.id}>
                {paths.map((item, index) => <MenuItem key={index} href={base_url + item.url}>{item.name}</MenuItem>)}
            </DropdownButton>

        );

    }
}

ReactDOM.render(<CrudIndexSorter title='sort by' id='sorting' />, document.querySelector('#js-sorting'));

export default CrudIndexSorter;