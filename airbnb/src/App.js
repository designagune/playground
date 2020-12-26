import React, { useState, useEffect, useCallback } from 'react';
import Header from './common/Header';
import Main from './page/Main';
function App() {

  const [scrollStatus, setScrollStatus] = useState(false);
  console.log("!");
  const scrollToggle = useCallback (() => {
    // window.scrollY >= 100 
    // ? setScrollStatus(true)
    // : setScrollStatus(false);

    if(window.pageYOffset >= 100) {
      setScrollStatus(true);
    }else {
      setScrollStatus(false);
    }
    console.log(window.scrollY ,scrollStatus);
  }, [scrollStatus]);

  useEffect(() => {
    window.addEventListener("scroll", scrollToggle )
  }, [scrollStatus]);

  

  return (
    <div className="wrap" style={{ height:"1500px" }}> {/*추후 스타일제거*/}
      <Header/>
      <Main status={ scrollStatus }/>
    </div>
  );
}

export default App;
