import {Switch, Route} from 'react-router-dom';
import {routes} from '../routes/routes';

function Main() {
    return (
        <Switch>
            {routes.map((route, i) => {
                return (
                    <Route path={route.path} exact component={route.page} key={i} />
                )
            })}
        </Switch>
    )
}

export default Main;