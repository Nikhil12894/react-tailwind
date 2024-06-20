import PlaceholderContent from "@/components/placeholder-content";
import useAuthStore from "@/hooks/use-login-store";

export default function AccountPage() {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Account /> : <PlaceholderContent />;
}

const Account = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>Account</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
