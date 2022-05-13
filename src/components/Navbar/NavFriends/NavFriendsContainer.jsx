
import NavFriends from "./NavFriends";
import {connect} from "react-redux";

// const NavFriendsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().sidebar;
//                 return (
//                     <NavFriends sidebar={state}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
// }
let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

let mapDispatchToProps = () => {
    return {}
}

const NavFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavFriends);

export default NavFriendsContainer;