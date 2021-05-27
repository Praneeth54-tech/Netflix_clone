import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Row from "./components/Row";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./requests";
import Login from './screens/LoginScreen';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[]);
  return (
    <div className="">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <div className="App">
                {/* Navbar */}
                <Nav />

                {/* Banner */}
                <Banner />

                {/* Rows */}
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchUrl={requests.fetchNetflixOriginals}
                  isLargeRow
                />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </div>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
