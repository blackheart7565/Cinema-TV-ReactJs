import store from "../store";

export type IStateType = ReturnType<typeof store.getState>;

export type IDispatchType = typeof store.dispatch;