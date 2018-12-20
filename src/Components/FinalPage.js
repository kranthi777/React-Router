import React, {Component } from 'react';
import TitleIcon from '../images/title.png';
class FinalPage extends Component {
  constructor(props) {
    super(props);
     this.state = {
       user1:'',
       user2:'',
       user1_details: {},
       user2_details:{}
     };
  }
  componentDidMount() {
    this.setState({user1:this.props.match.params.user1, user2:this.props.match.params.user2},function(){
      this.getUser1Details(this.props.match.params.user1);
      this.getUser2Details(this.props.match.params.user2);
    });
  }
  getUser1Details(user) {
    fetch("https://api.github.com/users/" + user)
      .then(res => res.json())
      .then(
        (result) => {
           this.setState({user1_details: result},function() {
           console.log(this.state);
        });
      },
      (error) => {
        this.setState({
          items: ''
        });
      }
    )
  }
  getUser2Details(user) {
    fetch("https://api.github.com/users/" + user)
      .then(res => res.json())
      .then(
        (result) => {
           this.setState({user2_details: result},function() {
           console.log(this.state);
        });
      },
      (error) => {
        this.setState({
          items: ''
        });
      }
    )
  }
  onSubmitAgain() {
    window.location="http://localhost:3000/";
  }
  render() {
    let user1Details = this.state.user1_details;
    let user2Details = this.state.user2_details;
    let user1 = <div className="col-sm-offset-2 col-md-3 user1-success">
      <img src={user1Details.avatar_url} className="img-circle user1-img" alt={user1Details.login}/>
      <h3 className="content-user1">{user1Details.login}</h3>
      <div className="content-wrapper">
        <h4 className="content-user1">Followers: {user1Details.followers}</h4>
        <h4 className="content-user1">No. of repos: {user1Details.public_repos}</h4>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-default view-profile-btn" ref="submit">VIEW PROFILE</button>
      </div>
    </div>;
    let user2 =  <div className="col-sm-offset-2 col-md-3">
      <img src={user2Details.avatar_url} className="img-circle user1-img" alt={user2Details.login}/>
      <h3 className="content-user2">{user2Details.login}</h3>
      <div className="content-wrapper"> 
        <h4 className="content-user2">Followers: {user2Details.followers}</h4>
        <h4 className="content-user2">No. of repos: {user2Details.public_repos}</h4>
      </div>
    </div>;    
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-5 col-md-3 title">
            <img src={TitleIcon} className="img-responsive" alt="Github Wars"/>  
          </div>
        </div>
        <div className="row display-users">
          {user1}
          {user2} 
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-default start-again-btn" ref="submit" onClick={()=>this.onSubmitAgain()}>START AGAIN</button>
        </div>
      </div>
    );
  }
}

export default FinalPage;