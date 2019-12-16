import React, {Component} from 'react';
import Icon from 'react-fa';

export default class SubjectForm extends Component {
  constructor(props){
    super(props)

    this.handleTyping = this.handleTyping.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
  }

  handleTyping(event){
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }


  addNewSubject(event){
    event.preventDefault();
    const newSubject = {
      subject: this.state.subject,
      resources: []
      };
    this.props.addSubject(newSubject);
  }

  render() {
    return(
      <form>
        <input name="subject" type="text" placeholder="subject" onChange={this.handleTyping}/>
        <br></br>
        <button onClick={this.addNewSubject}>Add New Subject</button> <Icon name="book" spin/>
      </form>
    )
  }
}
