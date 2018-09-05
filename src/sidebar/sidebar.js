import React from "react";
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const sidebarItems = [
	"Dashboard",
	"Managemen Laundry",
	"Managemen Stok",
	"Managemen Keuangan",
	"Hak Akses",
	"Setting"

];

const drawerWidth = 240;


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
})

class Sidebar extends React.Component {

	sidebarItems(){
		return sidebarItems.map((e, i) => (
			<div key={i} className="sidebar-items" >
				<span>{e}</span>
			</div>
		));
	}

	render(){
		const {openState, classes, theme} = this.props;
		console.log(openState);
		return(
			<Drawer  
				variant="permanent" 
				classes={{
		            paper: classNames(classes.drawerPaper, !openState && classes.drawerPaperClose),
		        }}
		        open={openState}
				>

				<div>  </div>
				{this.sidebarItems()}
			</Drawer>
		)
	}
}

export default withStyles(styles)(Sidebar);