export const updateObjectArray = (items, itemId, objPropName, newObjProps) => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
};

// export let updateObjectArray = () => {
//     state.users.map((u) => {
//         if (u.id === action.userId) {
//             return {...u, followed: true}
//         }
//         return u;
//     })
// };