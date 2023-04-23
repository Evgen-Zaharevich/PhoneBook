import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Layout } from 'components/Layout/Layout';
import { useAuth } from 'hook/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'components/route/PrivateRoute';
import { RestrictedRoute } from 'components/route/RestrictedRoute';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { ContactsBook } from 'pages/ContactsBook';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo={'/contacts'}
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsBook />}
                />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
