import PlaceholderContent from "@/components/placeholder-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import useAuthStore from "@/hooks/use-login-store";

export default function AccountPage() {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Account /> : <PlaceholderContent />;
}

const Account = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <ScrollArea className="h-[65vh] rounded-md border p-4">
        <h1>Account</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </ScrollArea>
    </div>
  );
};
