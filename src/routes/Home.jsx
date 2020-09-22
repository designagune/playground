import Dweet from "components/Dweet";
import { dbService } from "fbInstance";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [dweet, setDweet] = useState("");
  const [dweets, setDweets] = useState([]);

  useEffect(() => {
    dbService.collection("dweets").onSnapshot((snapshot) => {
      const dweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDweets(dweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("dweets").add({
      text: dweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setDweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDweet(value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
          value={dweet}
          onChange={onChange}
        />
        <input type="submit" value="Dweet" onClick={onSubmit} />
      </form>
      <div>
        {dweets.map((dweet) => (
          <Dweet
            key={dweet.id}
            dweetObj={dweet}
            isOwner={dweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default React.memo(Home);
