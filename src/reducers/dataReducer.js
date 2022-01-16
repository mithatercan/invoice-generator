const dataReducer = (state, action) => {
  switch (action.type) {
    case "load":
      // const localData = localStorage.getItem("data");
      // return [...state, JSON.parse(localData)].filter(Boolean);
      return state;
    case "add":
      localStorage.setItem("data", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];

    case "delete":
      localStorage.setItem(
        "data",
        JSON.stringify(state.filter((item) => item.id !== action.payload))
      );
      return state.filter((item) => item.id !== action.payload);

    case "edit":
      localStorage.setItem(
        "data",
        JSON.stringify(
          state.map((item) =>
            item.id === action.payload.id ? { ...item, ...action.payload.data } : item
          )
        )
      );
      console.log(
        state.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        )
      );
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload.data } : item
      );

    default:
      return state;
  }
};

export default dataReducer;
