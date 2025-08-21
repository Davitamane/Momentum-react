import { createContext, useReducer, useState } from "react";

const initialState = {
  temp: {
    department: [],
    priority: [],
    employee: "",
  },
  final: {
    department: [],
    priority: [],
    employee: "",
  },
};
function filterReducer(state, action) {
  switch (action.type) {
    case "toggle_department": {
      const includes = state.temp.department.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          department: includes
            ? state.temp.department.filter((d) => d !== action.payload)
            : [...state.temp.department, action.payload],
        },
      };
    }
    case "toggle_priority": {
      const includes = state.temp.priority.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          priority: includes
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

    case "select": {
      return {
        ...state,
        final: { ...state.temp },
      };
    }
    case "reset": {
      return {
        ...state,
        temp: { ...state.final },
      };
    }
    case "empty": {
      return {
        temp: { ...initialState.temp },
        final: { ...initialState.final },
      };
    }
    case "pop_department": {
      return {
        ...state,
        final: {
          ...state.final,
          department: state.final.department.filter(
            (el) => el !== action.payload
          ),
        },
      };
    }
    case "pop_priority": {
      return {
        ...state,
        final: {
          ...state.final,
          priority: state.final.priority.filter((el) => el !== action.payload),
        },
      };
    }

    case "pop_employee": {
      return {
        ...state,
        final: {
          ...state.final,
          employee: "",
        },
      };
    }

    default:
      return { ...state };
  }
}

export const MainPageContext = createContext();

function MainPageProvider({ children }) {
  const [open, setOpen] = useState("");
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  return (
    <MainPageContext.Provider value={{ open, setOpen, dispatch, filters }}>
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageProvider;
