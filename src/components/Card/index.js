import React from 'react'
import PropTypes from 'prop-types';
import getStyles from './card'
import './index.scss'

const Card = props => {
  const { children } = props
  const styles = getStyles(props)

  console.log('cardProps', props, styles)
  return (
    <div className="card" style={styles}>{children}</div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.object.isRequired
};

Card.defaultProps = {
  children: ''
}
