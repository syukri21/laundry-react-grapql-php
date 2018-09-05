import React from "react";
import { gql } from "apollo-boost";
import SearchBox from "./components/search-box"
import {Query} from "react-apollo"
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
const getNameQuery = gql ` 
 {
    pegawai(id: "A02") 
    {
      name
    }
  }
`;

const drawerWidth = 240;

const styles = theme => ({
   appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "50px",
    alignItems: "center",
    padding: "0 30px",
    backgroundColor : "#7E57C2",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
   appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logo : {
    display: "flex",
    justifySelf: "flex-start",
    alignItems: "center",

    "& :nth-child(1), :nth-child(2) " : {
      marginRight : "20px"
    },

    "& i" : {
      fontSize : "20px",
      cursor: "pointer"
    },

    "& input" :{
      font: "15px roboto",
      border : "none",
      outline:  "none",
      padding: "5px 20px",
      borderRadius: "20px",
      background: "#9879ce",
      color: "white",
      "&::placeholder" : {
        color: "#ddd",  
      },
    },
  },
  profile : {
    display: "flex",
    justifySelf: "flex-end",

    "& span"  : {
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
    },

    "& i" : {
      fontSize: "30px"
    }
  }
})

class Header extends React.Component {

  constructor(){
    super()
    this.state = {
      open : false
    }
  }

  

  displayName(){
    return (
      <div>
        <Query  query={getNameQuery} variable={this.props.data.sessionId}  >
          {({loading, data :{pegawai}}) => (
            <span> { !loading && pegawai.name  } </span>)
          }
        </Query>
        </div>

    );
  } 

  handleClick(){
    this.setState({
      open : !this.state.open,
    });
    this.props.openState(this.state.open);
  }


  render() {
    const {classes} = this.props;
    return (
     <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
        <div className={classes.logo}>
          <i className="fas fa-bars" onClick={this.handleClick.bind(this)} ></i>
          <span>Laundry King</span> 
          <SearchBox />
        </div>
        <div className={classes.profile}>
          <span>{this.displayName()}</span>
          <i  className="fas fa-user-circle" >  </i>
        </div>
      </AppBar>
    );
  }
}

export default  withStyles(styles)(Header);
