var inintialValue=[ 
                   { id:0, description: 'Milk', calories: 110, fat: 11, carbs: 1, protein: 7 }, 
                   { id:1, description: 'Egg', calories: 144, fat: 54, carbs: 12, protein: 44 }, 
                   { id:2, description: 'Meat', calories: 257, fat: 35, carbs: 7, protein: 36 }, 
                  ] 

const todos = (state = inintialValue, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [
          ...state,
          {
            id         :action.id,
            description:action.description,
            calories   :action.calories,
            fat        :action.fat,
            carbs      :action.carbs,
            protein    :action.protein
          }
        ]
      case 'EDIT_PRODUCT':
        return state.map(product =>product.id == action.id ? { ...product, [action.property]: action.value } : product)
      case 'DELETE_PRODUCT':
          return state.filter(product =>product.id == action.id ? false : true)  
      default:
        return state
    }
  }
  export default todos