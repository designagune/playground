import { dbService } from "fbInstance";
import React, { useState } from "react";

const Dweet = ({ dweetObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newDweet, setNewDweet] = useState(dweetObj.text);
  const onDelete = async () => {
    const yesOrNo = window.confirm("정말 삭제하시겠습니까?");
    console.log(yesOrNo);
    if (yesOrNo) {
      await dbService.doc(`dweets/${dweetObj.id}`).delete();
    }
  };

  const toggleEditing = () => setEdit((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`dweets/${dweetObj.id}`).update({
      text: newDweet,
    });
    setEdit(false);
    console.clear();
    console.warn("Don't let this happen again.");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDweet(value);
  };
  return (
    <div>
      {edit ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your dweet"
              value={newDweet}
              onChange={onChange}
              required
            />
            <input type="submit" value="Update Dweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <p>{dweetObj.text}</p>
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete Dweet</button>
              <button onClick={toggleEditing}>Edit Dweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Dweet;
