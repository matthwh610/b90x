import React from "react";
import { users } from "../stitch";

const myuserReducer = (state, { type, payload }) => {
  switch (type) {
    case "setmyusers": {
      return {
        ...state,
        hasHadmyusers: payload.myusers.length > 0,
        myusers: payload.myusers || [],
      };
    }
    case "addmyuser": {
      const newmyuser = {
        ...payload,
        checked: typeof payload.checked === "boolean" ? payload.checked : false,
      };
      return {
        ...state,
        hasHadmyusers: true,
        myusers: [...state.myusers, newmyuser],
      };
    }
    case "removemyuser": {
      const removeSpecifiedmyuser = myuser => myuser.id !== payload.id;
      return {
        ...state,
        myusers: state.myusers.filter(removeSpecifiedmyuser),
      };
    }
    case "clearCompletedmyusers": {
      const isNotCompleted = myuser => myuser.checked !== true;
      return {
        ...state,
        myusers: state.myusers.filter(isNotCompleted),
      };
    }
    case "clearmyusers": {
      return { ...state, myusers: [] };
    }
    case "setmyuserstatus": {
      const updatemyuserstatus = myuser => {
        const isThismyuser = myuser._id === payload.id;
        return isThismyuser ? { ...myuser, status: payload.status } : myuser;
      };
      return {
        ...state,
        myusers: state.myusers.map(updatemyuserstatus),
      };
    }
    case "completeAllmyusers": {
      return {
        ...state,
        myusers: state.myusers.map(myuser => ({ ...myuser, checked: true })),
      };
    }
    case "togglemyuserstatus": {
      const updateStatus = myuser => {
        const isThismyuser = myuser._id === payload.id;
        return isThismyuser ? { ...myuser, checked: !myuser.checked } : myuser;
      };
      return {
        ...state,
        myusers: state.myusers.map(updateStatus),
      };
    }
    default: {
      console.error(`Received invalid myuser action type: ${type}`);
    }
  }
};

export function useUserItems(userId) {
  //
  const [state, dispatch] = React.useReducer(myuserReducer, { myusers: [] });
  // myuser Actions
  const loadmyusers = async () => {
    const myusers = await users.find({}, { sort: {'completed': -1}, limit: 1000 }).asArray();
    dispatch({ type: "setmyusers", payload: { myusers } });
  };
  const addmyuser = async task => {
    const myuser = { task, owner_id: userId, one: task, two: task };
    const result = await users.insertOne(myuser);
    dispatch({ type: "addmyuser", payload: { ...myuser, _id: result.insertedId } });
  };
  const removemyuser = async myuserId => {
    await users.deleteOne({ _id: myuserId });
    dispatch({ type: "removemyuser", payload: { id: myuserId } });
  };
  const clearmyusers = async () => {
    await users.deleteMany({});
    dispatch({ type: "clearmyusers" });
  };
  const clearCompletedmyusers = async () => {
    await users.deleteMany({ checked: true });
    dispatch({ type: "clearCompletedmyusers" });
  };
  const setmyuserCompletionStatus = async (myuserId, status) => {
    await users.updateOne(
      { _id: myuserId },
      { $set: { checked: status } },
      { returnNewDocument: true },
    );
    dispatch({ type: "setmyuserstatus", payload: { myuserId, status } });
  };
  const completeAllmyusers = async () => {
    await users.updateMany({ owner_id: userId }, { $set: { checked: true } });
    dispatch({ type: "completeAllmyusers" });
  };
  const togglemyuserstatus = async (myuserId, status) => {
    const myuser = state.myusers.find(t => t._id === myuserId);
    await users.updateOne(
      { _id: myuserId },
      { $set: { checked: !myuser.checked } },
    );
    dispatch({ type: "togglemyuserstatus", payload: { id: myuserId } });
  };

  React.useEffect(() => {
    loadmyusers();
  }, []);
  return {
    users: state.myusers,
    hasHadmyusers: state.hasHadmyusers,
    actions: {
      addmyuser,
      removemyuser,
      setmyuserCompletionStatus,
      clearmyusers,
      clearCompletedmyusers,
      completeAllmyusers,
      togglemyuserstatus,
    },
  };
}






/*
import React from "react";
import { users } from "../stitch";

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "setUsers": {
      return {
        ...state,
        hasHadUsers: payload.myusers.length > 0,
        myusers: payload.myusers || [],
      };
    }
    case "clearUsers": {
      return { ...state, myusers: [] };
    }
  }
};

export function useUserItems(userId) {
  //
  const [state, dispatch] = React.useReducer(userReducer, { myusers: [] });
  // myuser Actions
  const loadUsers = async () => {
    const myusers = await users.find({}, { limit: 1000 }).asArray();
    dispatch({ type: "setUsers", payload: { myusers } });
  };
  const clearUsers = async () => {
    await users.deleteMany({});
    dispatch({ type: "clearmyusers" });
  };
  React.useEffect(() => {
    loadUsers();
  }, []);
  return {
    users: state.myusers,
    hasHadUsers: state.hasHadUsers,
    actions: {
        clearUsers,
    },
  };
}
*/
