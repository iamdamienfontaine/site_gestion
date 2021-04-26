import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createArticle } from "../../actions/authActions";
import classnames from "classnames";

class CreateArticle extends Component {
  constructor() {
    super();
    this.state = {
      reference: "",
      name: "",
      description: "",
      family: "",
      quantite: 0,
      path: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/createarticle");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newArticle = {
      reference: this.state.reference,
      name: this.state.name,
      description: this.state.description,
      family: this.state.family,
      quantite: this.state.quantite,
      path: this.state.path
    };

    this.props.createArticle(newArticle, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Créer un article</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.reference}
                  error={errors.reference}
                  id="reference"
                  type="text"
                  className={classnames("", {
                    invalid: errors.reference
                  })}
                />
                <label htmlFor="reference">Référence</label>
                <span className="red-text">{errors.reference}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Nom</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  error={errors.description}
                  id="description"
                  type="text"
                  className={classnames("", {
                    invalid: errors.description
                  })}
                />
                <label htmlFor="description">Description</label>
                <span className="red-text">{errors.description}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.family}
                  error={errors.family}
                  id="family"
                  type="text"
                  className={classnames("", {
                    invalid: errors.family
                  })}
                />
                <label htmlFor="family">Famille de produit</label>
                <span className="red-text">{errors.family}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.quantite}
                  error={errors.quantite}
                  id="quantite"
                  type="number"
                  className={classnames("", {
                    invalid: errors.quantite
                  })}
                />
                <label htmlFor="quantite">Quantité de produit</label>
                <span className="red-text">{errors.quantite}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.path}
                  error={errors.path}
                  id="path"
                  type="text"
                  className={classnames("", {
                    invalid: errors.path
                  })}
                />
                <label htmlFor="path">Chemin de l'image</label>
                <span className="red-text">{errors.path}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Créer l'article
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createArticle }
)(withRouter(CreateArticle));
