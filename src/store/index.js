import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(persist(
    (set) => ({
  
  isAuthenticated: false,

  login: (token) => {
  
    set({ token, isAuthenticated: true });
  },

  logout: () => {

    set({ token: null,
          isAuthenticated: false });
  },
}),
{
  name: "auth-token",
  storage: createJSONStorage(() => localStorage),
}
));


{/*يا هندسه انا عرفت طريقه كمان واشتغلت معايا بس مش عارف هي أمن ولا*/}

// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   token: localStorage.getItem("token") || null,
//   isAuthenticated: !!localStorage.getItem("token"),

//   login: (token) => {
//     localStorage.setItem("token", token);
//     set({ token, isAuthenticated: true });
//   },

//   logout: () => {
//     localStorage.removeItem("token");
//     set({ token: null, isAuthenticated: false });
//   },
// }));