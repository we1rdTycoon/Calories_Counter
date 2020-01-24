let nextTodoId = 3
export const addTodo = (description,calories,fat,carbs,protein) => ({
  type       :'ADD_PRODUCT',
  id         :nextTodoId++,
  description:description,
  calories   :calories,
  fat        :fat,
  carbs      :carbs,
  protein    :protein,

})
export const editTodo = (id,property,value) => ({
  type: 'EDIT_PRODUCT',
  id  :id,
  property:property,
  value:value,
})

export const deleteTodo = (id) => ({
  type: 'DELETE_PRODUCT',
  id  :id,
})