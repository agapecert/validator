// "Messages.jsx"
import React       from "react";
import { connect } from "@cerebral/react";
import Snackbar    from "@material-ui/core/Snackbar";
import MuiAlert    from "@material-ui/lab/Alert";
import { state }   from "cerebral/tags";

class Messages extends React.Component {

	renderMessage() {
		return (
				<Snackbar open={true} >
						<MuiAlert elevation={6} variant="filled" severity="success"> 
			      {this.props.message}
			      </MuiAlert>
				</Snackbar>
		)
  }

	render() {
		return (
	    <div>
			{ this.props.open ? this.renderMessage() : null }
			</div>
		)
	}
}

export default connect(
	{
    open: state`Messages.open`,
		message: state`Messages.message`
	},
	(Messages)
);

