import PropTypes from 'prop-types'
import Button from './Button'

const Header  = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1 style={{color: 'blue', backgroundColor:'orange'}}>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}


Header.defaultProps = {
    title: '[Task Tracker]',
}

export default Header
