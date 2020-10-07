import Dweet from "components/Dweet";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbInstance";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [dweet, setDweet] = useState("");
  const [dweets, setDweets] = useState([]);
  const [attachment, setAttachment] = useState();

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
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const dweetObj = {
      text: dweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("dweets").add(dweetObj);
    setDweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setDweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    const thumb = files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const {
        currentTarget: { result },
      } = e;
      setAttachment(result);
    };
    reader.readAsDataURL(thumb);
  };

  const onClear = (event) => {
    event.preventDefault();
    setAttachment(null);
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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Dweet" onClick={onSubmit} />
        {attachment && (
          <div>
            <img src={attachment} alt="thumbnail" width="50px" height="50px" />
            <button onClick={onClear}>Clear Image</button>
          </div>
        )}
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
