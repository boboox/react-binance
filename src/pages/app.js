import React from 'react';
import {
    Layout
} from 'antd';
import './app.less';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './home/container';
import Trade from './trade/container';
import AppHeader from '@comp/app-header';
class App extends React.Component {
    componentDidMount() {
        // this.props.loading(true);
    }
    render() {
        return (
            <div className='app-wrapper'>
                <AppHeader description={'here is description'} />
                <Layout className="main-container">
                    <Router>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/trade/:symbol" component={Trade} />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Router>
                </Layout>
            </div>
        )
    }
}

export default App;
