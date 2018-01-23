import React, {Component} from 'react';
import trim from 'trim';
import MessageList from './MessageList';


class MessageBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: '',
      fName: '',
      lName: '',
      age: 0,
      dob:'',
      gender:'',
      phone: '',
      info: ''

    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLName = this.handleChangeLName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeDob = this.handleChangeDob.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeInfo = this.handleChangeInfo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeName(event) {
    this.setState({fName: event.target.value});
  }
  handleChangeLName(event) {
    this.setState({lName: event.target.value});
  }
  handleChangeAge(event) {
    this.setState({age: event.target.value});
  }
  handleChangeDob(event) {
    this.setState({dob: event.target.value});
  }
  handleChangeGender(event) {
    this.setState({gender: event.target.value});
  }
  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }
  handleChangeInfo(event) {
    this.setState({info: event.target.value});
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.fName);
    event.preventDefault();
    let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: this.state.fName,
        lastName: this.state.lName
      });
      
  }

  onChange(e){
      this.setState({
        message: e.target.value
      });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         {/* firstname, lastname, age, dob, gender (dropdown), phone, free text information. A submit button should validate and put the information in the database. Validation of fields are mandatory. */}

        <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}>
          </textarea>

          <label>
            First Name:
            <input type="text" onChange={this.handleChangeName} fName={this.state.fName} />
          </label>

          <label>
            Last Name:
            <input type="text" onChange={this.handleChangeLName} lName="name" />
          </label>

          <label>
            Age:
            <input type="text" onChange={this.handleChangeAge} age="name" />
          </label>

          <label>
            DOB
            <input type="text" onChange={this.handleChangeDob} dob="name" />
          </label>

          <label>
            Gender:
            <select value={this.state.gender} onChange={this.handleChangeGender}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </label>


          <label>
            Phone:
            <input type="text" phone="name" onChange={this.handleChangePhone} />
          </label>
          
          <label>
            Free test information:
            <input type="text" info="name" onChange={this.handleChangeInfo} />
          </label>

          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default MessageBox
