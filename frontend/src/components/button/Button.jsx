import PropTypes from 'prop-types'

function Button ({ label, color = 'blue', size = 'md', onClick, disabled }) {
  const buttonColor = {
    blue: 'btn-primary',
    green: 'btn-success',
    red: 'btn-danger'
  }

  const buttonSize = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }

  const colorClassName = buttonColor[color]
  const sizeClassName = buttonSize[size]
  return (
    <button
      onClick={onClick} disabled={disabled}
      className={`btn ${colorClassName} ${sizeClassName}`}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'green', 'red']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
