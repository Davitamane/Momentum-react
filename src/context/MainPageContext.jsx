import { createContext, useReducer, useState } from "react";

export const MainPageContext = createContext();

const initialState = {
  temp: {
    department: [],
    priority: [],
    employee: "",
  },
  applied: {
    department: [],
    priority: [],
    employee: "",
  },
};
function filterReducer(state, action) {
  switch (action.type) {
    case "toggle_department": {
      const exists = state.temp.department.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          department: exists
            ? state.temp.department.filter((d) => d !== action.payload)
            : [...state.temp.department, action.payload],
        },
      };
    }

    case "toggle_priority": {
      const exists = state.temp.priority.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          priority: exists
            ? state.temp.priority.filter((p) => p !== action.payload)
            : [...state.temp.priority, action.payload],
        },
      };
    }

    case "toggle_employee": {
      return {
        ...state,
        temp: {
          ...state.temp,
          employee:
            state.temp.employee === action.payload ? "" : action.payload,
        },
      };
    }

    case "APPLY_FILTERS":
      return {
        ...state,
        applied: { ...state.temp },
      };

    case "RESET_TEMP":
      return {
        ...state,
        temp: { ...state.applied }, // restore checkboxes to last applied
      };

    default:
      return state;
  }
}

function MainPageProvider({ children }) {
  const [filters, dispatch] = useReducer(filterReducer, initialState);
  const [open, setOpen] = useState("");

  return (
    <MainPageContext.Provider value={{ filters, dispatch, open, setOpen }}>
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageProvider;
