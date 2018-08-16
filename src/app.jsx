import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import './assets/styles/common.scss'
// 页面
import Home             from 'pages/home/index.jsx';
import Goods             from 'pages/goods/index.jsx';
/*import ProductRouter    from 'page/product/router.jsx';
import Login            from 'page/login/index.jsx';
import OrderList        from 'page/order/index.jsx';
import OrderDetail      from 'page/order/detail.jsx';
import UserList         from 'page/user/index.jsx';
import ErrorPage        from 'page/error/index.jsx';*/

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    {/*<Route path="/login" component={Login}/>*/}
                    <Route exact path="/" component={Home}/>/>
                    <Route path="/goods" component={Goods}/>/>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);