import React, { useState, useRef } from "react";
import CreateMember from "./CreateMember";
import Member from "./Member";
import PlusMinus from "./component/PlusMinus";
import AxiosFilter from "./component/AxiosFilter";
import { useEffect } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  const [mentee,setMentee] = useState({
    memberName:"",
    katalk:""
  });

  const {memberName, katalk} = mentee;

  const onChange = (event) => {
    const {target: 
      { name, value } 
    } = event;
    setMentee({
      ...mentee,
      [name] : value
    });
  }

  const [memberData, setMemberData] = useState([
    {
      id: 1,
      memberName: "채동건",
      katalk: "건이",
      status: true
    },
    {
      id: 2,
      memberName: "김영우",
      katalk: "♻️",
      status: true
    },
    {
      id: 3,
      memberName: "유항진",
      katalk: "항따리",
      status: false
    },
    {
      id: 4,
      memberName: "정세리",
      katalk: "SeRi",
      status: false
    },
  ]);

  

  const nextId = useRef(5);

  const onCreate = () => {
    const newMember = {
      id:nextId.current,
      memberName,
      katalk
    };
    setMemberData([...memberData, newMember]);

    setMentee({
      memberName:"",
      katalk:""
    });

    nextId.current += 1;
  };

  const onRemove = id => {
    setMemberData(memberData.filter( member => member.id !== id));
  }

  const onStatus = id => {
    setMemberData(
      memberData.map( member => 
        member.id === id ? {...member, status: !member.status} : member
      )
    );
  }
////////////////////

  const alertLocation = (loc) => alert(loc);
  return (
    <>
      <Member memberData={memberData} onRemove={onRemove} onStatus={onStatus}/>
      <CreateMember memberName={memberName} katalk={katalk} onChange={onChange} onCreate={onCreate} />
      {/* <hr />
      <div>
        <AxiosFilter />
      </div> */}
      <div>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/about">소개</Link></li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route 
          path="/about" 
          render={ ()=> <About locationData={alertLocation} /> }
        />
      </div>
    </>
  );
}

export default App;
