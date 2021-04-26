import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "./../layout/Navbar";
import { Link } from "react-router-dom";



class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();      

  };


  render() {
    const { user } = this.props.auth;

    
    return (
      <div>
        <Navbar/>

        <div style={{ height: "75vh" }} className="container valign-wrapper">
          
          <div className="row">

            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Bonjour à toi </b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  Vous vous êtes connecté sur la plateforme de gestion de stock de {" "}
                  <span style={{ fontFamily: "monospace" }}>CANDLE</span> 👏
                </p>
              </h4>
              <Link
                to="/allstock"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Voir le stock
              </Link>

            </div>
           <p></p>
            <div className="landing-copy col s12 center-align">
              
              <Link
                to="/createarticle"
                style={{
                  width: "250px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Créer un article
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
