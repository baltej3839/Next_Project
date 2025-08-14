import Image from "next/image";
import React, { Children } from "react";

export default function ({children}:{children:React.ReactNode}) {
  return ( <div className="text-center border-b p-1 ">
      Log in now to get 20% off
      {children}
  </div> );
}
