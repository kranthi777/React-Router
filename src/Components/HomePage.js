import React, {Component } from 'react';
import TitleIcon from '../images/title.png';
import User1Icon from '../images/user1.png';
import User2Icon from '../images/user2.png';
class HomePage extends Component {
  constructor(props) {
    super(props);
     this.state = {
        user1:'',
        user2:'',
        items:{}
     };
     this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault();
    let user1=this.refs.user1.value;
    let user2=this.refs.user2.value;
    this.setState({user1:user1, user2:user2}, function() {
      fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({items: result}, function() {
            let count = 0, i;
            //checking user1 and user2 exists or not
            //if exists taking to success page else giving an alert 
            for (i=0;i<this.state.items.length;i++) {
              if (this.state.items[i].login === this.state.user1 || this.state.items[i].login === this.state.user2) {
                count = count+1;
              }
            }
            if (count === 2) {
              window.location="http://localhost:3000/success/"+ this.state.user1 + "/" + this.state.user2;
            } else {
              alert('user1/user2 name is incorrect');
            }
          });
        },
        (error) => {
          this.setState({
            items: ''
          });
        }
      )
    });
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-offset-5 col-sm-3 title">
            <img src={TitleIcon} className="img-responsive" alt="Github Wars"/>  
          </div>
        </div>
        <div className="users-form">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group row">
              <div className="col-sm-offset-1 col-sm-2">
                <img src={User1Icon} className="img-responsive" alt="User1"/>
              </div>
              <div className="col-sm-2">
                <h3 className="ninja">Ninja 1</h3>
                <label className="user-label user">enter github username</label>
                <input type="text" className="form-control" placeholder="start typing" ref="user1" required/>
              </div>
              <div className="col-sm-offset-2 col-sm-2 user2">
                <img src={User2Icon} className="img-responsive" alt="User1"/>
              </div>
              <div className="col-sm-2">
                <h3 className="ninja">Ninja 2</h3>
                <label className="user-label user">enter github username</label>
                <input type="text" className="form-control" placeholder="start typing" ref="user2" required/>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-default submit-btn" ref="submit">START</button>
            </div>  
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;