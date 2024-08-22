"use client";

import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  // for redux purposes
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
