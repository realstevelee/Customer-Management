import React from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class CustomerDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id) {
        const url = 'http://localhost:3000/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        console.log(id);
        this.props.stateRefresh();
    }
    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>Delete</Button>
                <Dialog open={this.state.open} onClose={this.state.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        Do you want to delete customer info?
                    </DialogTitle>
                    <DialogContent>
                        <Typography>
                            Selected customer info will be deleted.
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => this.deleteCustomer(this.props.id)}>Delete</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;