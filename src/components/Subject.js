
import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import Icon from 'react-fa';


export default class Subject extends Component {

  constructor(props){
    super(props);
    this.state = {buttonClick: true, headerClick: false, title: '', url: '', deleteValue: ''};
    // this.buttonClick = this.buttonClick.bind(this);
    this.headerClick = this.headerClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubjectDelete = this.handleSubjectDelete.bind(this);
    this.handleResourceDelete = this.handleResourceDelete.bind(this);

  }

handleSubmit(event) {
  event.preventDefault();
  const newResource = {
    title: this.state.title,
    url: this.state.url
    }
  this.props.addResource(this.props.index, newResource);
}

//
// buttonClick() {
//   this.setState(prevState => ({
//   buttonClick: !prevState.buttonClick
//   }));
// }

headerClick() {
  this.setState(prevState => ({
  headerClick: !prevState.headerClick
  }));
}

handleTyping(event) {
  this.setState({[event.target.name]: event.target.value});
  event.preventDefault();
}

handleDropdown(evt) {
    if(this.state.value !== evt.target.value) {
     this.setState({
       selectValue:evt.target.value
     });
   }
}

handleSubjectDelete(evt) {
  this.props.deleteSubject(this.props.index);
  evt.preventDefault();
   }

handleResourceDelete(evt) {
  this.props.deleteResource(this.props.index, evt.target.name);
  evt.preventDefault();
   }


render() {
  const title = "title";
  const url = "url";
  return(


    <div>
        <h1 onClick={this.headerClick}>{this.props.items.subject}</h1>
          <button onClick={this.handleSubjectDelete}> Delete Subject </button>   <Icon name="frown-o fa-1x"/>
            <ul>
              {this.props.items.resources.map((resource, index) => {
                if(this.state.headerClick) {
                  return(
                    <li>
                    <a href={resource.url}>{resource.title}</a>
                    <br></br><button name={index} onClick={this.handleResourceDelete}> delete </button>

                    </li>
                        )
                    }
                })
              }
          </ul>

        <form>
          <input name="title" type="text" placeholder = {title} onChange={this.handleTyping}/>
          <input name="url" type="text" placeholder = {url} onChange={this.handleTyping}/>
          <button onClick={this.handleSubmit}> Post it! </button>
        </form>

        {/* <button onClick={this.buttonClick}>{this.state.buttonClick ? 'WOW' : 'GAH'}</button> */}
        <br></br>
        <div><Dropdown/></div>
    </div>
        )
      }
}
