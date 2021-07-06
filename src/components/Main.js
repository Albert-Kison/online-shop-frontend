import {Switch, Route} from 'react-router-dom';
import AdminMain from './AdminMain';
import UserMain from './UserMain';
import Products from './Products';

function Main() {
    return (
        <Switch>
            <Route path="/" exact component={UserMain} />
            <Route path="/products" exact component={Products} />
            <Route path="/admin/add-product" component={AdminMain} />
        </Switch>
    )
}

export default Main;