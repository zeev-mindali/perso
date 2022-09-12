const intialTodos = [
    {
        id:1,
        title: "Clean the house",
        complete: false,
    },
    {
        id:2,
        title:"Take out the grabge",
        complete:false,
    },
    {
        id:3,
        title:"Make fish for the eve",
        complete:false,
    },
    {
        id:4,
        title: "Clean the house",
        complete: false,
    }
];

const todoReducer = (state,action)=>{
    switch (action.type){
        case "COMPLETE":
            return state.map((todo)=>{
                if (todo.id === action.id){
                    return {...todo, complete: !todo.complete};
                } else {
                    return todo;
                }
            });

        case "DELETE":
            return state.filter(item=>item.id!=action.id)

        default:
            return state;
    }
}

