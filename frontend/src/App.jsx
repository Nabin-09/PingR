import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <>
      
      <SignedIn>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path = '/auth' element = {<Navigate to={'/'} replace />}/>
        </Routes>
      </SignedIn>
      <SignedOut>
        <Routes>
          <Route path='/' element={<AuthPage />}/>
          <Route path = '*' element = {<Navigate to={'/auth'} replace />}/>
        </Routes>
      </SignedOut>
    </>
  );
}