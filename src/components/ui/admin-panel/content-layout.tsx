import { useStore } from "@/hooks/use-store";
import { Navbar } from "./navbar";
import { useTitle } from "@/hooks/use-title";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  const title1 = useStore(useTitle, (state) => state);

  return (
    <div>
      <Navbar title={title1?.title} />
      <div className="w-full pt-8 pb-8 px-4">{children}</div>
    </div>
  );
}
