import {Switch, Route} from 'react-router-dom';
import AdminMain from './AdminMain';
import UserMain from './UserMain';

function Main() {
    return (
        <Switch>
            <Route path="/" exact component={UserMain} />
            <Route path="/admin" component={AdminMain} />
        </Switch>
    )
}

export default Main;