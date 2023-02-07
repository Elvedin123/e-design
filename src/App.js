import Home from "./routes/home/home.component";
import Nav from "./routes/navbar/nav.component";
import Signin from "./routes/sign-in/signin.component";
import { Routes, Route } from "react-router-dom";


const Shop = () => {
  return <h1> shop page</h1>
}

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<Signin />} />
      </Route>

    </Routes>
  )
}

export default App;
