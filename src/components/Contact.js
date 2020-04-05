import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'



const Contact = (props) => {
    return (
        <div className='Contact'>
            
            <img src={props.avatarPic} className='avatar' alt={props.character}></img>
            <h4 className='name'>{props.characterFirstName + ' ' + props.characterLastName}
                <div className='status'>
                    <div className={props.on ? 'status-online' : 'status-offline'}></div>
                    <p className='status-text'>{props.online ? 'online' : 'offline'}</p>             
                </div>
            </h4>
        </div>

    );
}
Contact.propTypes = {
    characterFirstName: PropTypes.string,
    characterLastName:  PropTypes.string,
    on: PropTypes.bool,
    online: PropTypes.bool,
}    
export default Contact;