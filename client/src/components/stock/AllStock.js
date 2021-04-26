import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./../layout/Navbar";
import { Link } from "react-router-dom";



class AllStock extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();      

  };


  render() {
    const { user } = this.props.auth;

    
    return (
      <div>
        <Navbar/>
        <h4>
                Bonjour à toi  <b>{user.name.split(" ")[0]}</b>, voici tout le stock :
        </h4>
        <div style={{ height: "75vh" }} className="container valign-wrapper">

          <div className="row">

            <div className="landing-copy col s12 center-align">



            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllStock.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AllStock);
