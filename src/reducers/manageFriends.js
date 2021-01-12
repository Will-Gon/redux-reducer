export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let friendToRemove = state.friends.findIndex(friend => friend.id === action.id)
            return {friends: [...state.friends.slice(0, friendToRemove), ...state.friends.slice(friendToRemove + 1)]}
        default: 
        return state
    }
}
