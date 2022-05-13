import React, {Component} from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import {HashRouter, Route} from 'react-router-dom';
import Setting from './components/Setting/Setting';
import Friends from './components/Friends/Friends';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {withSuspense} from "./hoc/withSuspense";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter basemname={process.env.PUBLIC_URL}>
                <div className="app-wrapper">
                    <div className="container">
                        <HeaderContainer/>
                        <div className="main">
                            <Navbar/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/setting" component={Setting}/>
                            <Route path="/friends" render={() => <Friends/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);