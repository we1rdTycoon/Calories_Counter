import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../actions/index.js'
import tableColories from '../components/tableColories.js'


const mapStateToProps = state => ({
    todos: state,
  })
  const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo  : (id,property,value) => dispatch(editTodo(id,property,value))
  })
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tableColories)