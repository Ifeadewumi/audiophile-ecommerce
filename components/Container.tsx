// components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="container px-4 md:px-0">{children}</div>;
}
