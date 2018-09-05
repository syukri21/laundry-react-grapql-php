import React from "react";
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

const sidebarItems = [
	"Dashboard",
	"Managemen Laundry",
	"Managemen Stok",
	"Managemen Keuangan",
	"Hak Akses",
	"Setting"

];

class Sidebar extends React.Component {

	sidebarItems(){
		return sidebarItems.map((e, i) => (
			<div key={i} className="sidebar-items" >
				<span>{e}</span>
			</div>
		));
	}

	render(){
		return(
			<Drawer  
				variant="permanent" 
				className="sidebar"
				>

				<div>  </div>
				{this.sidebarItems()}
			</Drawer>
		)
	}
}

export default Sidebar;