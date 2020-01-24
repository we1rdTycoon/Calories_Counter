import totalCount from '../components/totalCount.js'; 
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos: state,
})

export default connect(mapStateToProps)(totalCount);