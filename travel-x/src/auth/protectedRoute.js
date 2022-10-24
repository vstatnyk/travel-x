import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components/index';

const ProtectedRoute = ({ component, ...args }) => {

const Component=withAuthenticationRequired(component, args, {
    onRedirecting: () => <Loading />,
});
return <Component />;
};

export default ProtectedRoute;