import photo from './Image'
import PropTypes from 'prop-types'
import photo from './Image'


const data = ({fullName,bio,profession}) => {


const handleName=()=>{
    alert( fullName)
}
    return (
        <div style={{textAlign:'center'}}>
             <photo/>
            <h1>{fullName} </h1>
            <h3>{bio}</h3>
            <h2>{profession}</h2>
            <button style={{backgroundColor:'blue'}}onClick={handleName}>profile Name</button>
           

        </div>
    )
}

data.defaultProps = {
    fullName:'youssef barbana',
    bio:'23 years student in GoMyCode',
    profession:'Web Developer'

}

data.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}



export default data