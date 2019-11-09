import React,{Component} from 'react'
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    componentWillUpdate(){
        console.log('[Modal] Update')
    }
    render()
    {
        return(
            <div>
           <div className={classes.Modal}
            style={{
                transform:this.props.show?'translateY(0)':'translateY(-100vh)',
                opacity:this.props.show?'1':'0'
            }}>
           </div>
           </div>
           );
    }
} 

export default Modal;
