const initState = {
    count: 0
}

export default function reducers(state:any = initState, action: any){
    switch (action.type){
        case 'add_action':
        return{
            count: state.count + 1
        };
        default:
            break
    }
    console.log(state)
    console.log(action)
    return state
}