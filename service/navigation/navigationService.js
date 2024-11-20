import React, { createRef } from "react";

export const navigationServiceRef = createRef();

export const navigate = (name, params) => {
  navigationServiceRef.current?.navigate(name, params);
};
