
import './App.css'
import AdminPanel from './components/AdminPanel'
import LoginForm from './components/LoginForm'
function App() {
  // const user = {
  //   name: 'Safdar',
  //   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //   imageSize: 90,
  // };
  let content;
  if (true) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <>
      {content}
    </>
  )
}

export default App
