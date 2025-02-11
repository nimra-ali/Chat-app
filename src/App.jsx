import Chat from "./components/chat/Chat";
import Detail from "./components/detail/detail"
import List from "./components/list/list"
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";

const App = () => {

  const user = false;

  return (
    <div className='container'>
      {user ? (

<>

<List/>
<Chat/>
<Detail/>

</>
      ) : (
        <Login/>
      )}

      <Notification/>
    </div>
  )
}

export default App;