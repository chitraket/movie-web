import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/hook';

const AuthLayout = () => {
    const {success, currentUserInfo} = useAuth();
    if(success && currentUserInfo) {
        return <Navigate to={'/'} replace />
    }
    return (
            <Outlet />
    );
};

export default AuthLayout;