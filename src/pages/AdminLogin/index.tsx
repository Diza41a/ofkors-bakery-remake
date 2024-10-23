import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Input } from '../../components/Inputs';
import { GlobalContext } from '../../contexts/global';
import { authenticateAdmin } from '../../api/authMethods.api';
import { cookies } from '../../api/api';
import S, { classes } from './styles';

const AdminLoginPage = (): JSX.Element => {
  const { authState: [isAdminLoggedIn, setIsAdminLoggedIn] } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState('');
  const handlePasswordChange = ({ target }: React.FormEvent<HTMLInputElement>) => {
    setPasswordInput((target as HTMLInputElement).value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const password = passwordInput.trim();
    authenticateAdmin(password)
      .then(({ data }) => {
        const { access_token } = data;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        cookies.remove('access_token', { path: '/' });
        cookies.set('access_token', access_token, { expires: expirationDate, path: '/' });
        setIsAdminLoggedIn(true);
        navigate('/admin/menus');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (isAdminLoggedIn) navigate('/admin/menus');
  });

  return (
    <S.AdminPageContainer className={classes.root}>
      <form action="submit">
        <p>Enter the admin password:</p>
        <Input type='password' onChange={handlePasswordChange} />
        <Button size="small" type='submit' onClick={handleSubmit}>Login</Button>
      </form>
    </S.AdminPageContainer>
  );
};

export default AdminLoginPage;
