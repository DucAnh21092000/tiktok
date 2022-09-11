import React from 'react'
import PropTypes from 'prop-types'

function Avatar({src}) {
    return (
        <div className='avatar' style={{ backgroundImage: `url(${src})`, height: '50px', width: '50px' }}></div>

    )
}

Avatar.propTypes = {}

export default Avatar
