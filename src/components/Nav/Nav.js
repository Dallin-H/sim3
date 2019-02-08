import React from "react";
// import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";

function Nav(props) {
  console.log(props)
  if (props.location.pathname !== '/') {
    return (
      <div className='Nav'>
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>
      </div>
    );
  } else return null
}

// const mapStateToProps = reduxState => {
//   return {
//     id: reduxState.id,
//     profile_pic: reduxState.profile_pic
//   }
// }


export default withRouter(Nav);
// export default withRouter(connect(mapStateToProps)(Nav))