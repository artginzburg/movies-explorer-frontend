import { Route, Redirect } from 'react-router-dom';

import { paths } from '../utils/constants';

const ProtectedRoute = (props) => (
  <Route path={props.path}>{props.loggedIn ? props.children : <Redirect to={paths.main} />}</Route>
);
export default ProtectedRoute;
