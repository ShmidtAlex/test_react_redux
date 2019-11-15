const initialState = [
  { user: 'user 1', email: 'example@example.com', content: 'content from first user' },
  { user: 'user 2', email: 'example@example.com', content: 'content from second user' }
]

export default function issueTracker(state = initialState, action) { //it is called reducer and 
    console.log(action);
  //will show two actions: 1. {type: "@@redux/INITf.8.0.v.d.j"} - action of redux initialization
  // and 2. {type: "ADD_ISSUE", record: "something"}
  //state for change store: 
  if (action.type === "ADD_ISSUE") {
    return [
      ...state, //spread added value to array and returns new array and it's important, because we can't 
      //change store(it's immutable) and only can always create new 'cast' with new state of store
      // action.record,
      // action.name,
      // action.email,
      // action.content,
      // action.status
      action.userData
    ];
  } 
  // else if (action.type === "REDACT_ISSUE") { экшн, работающий с другой частью объекта должен быть перенесен в другой подобный файл
    
  // }
  return state;
}