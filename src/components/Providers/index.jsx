import { UserProvider } from "../../contexts/UserContext";
import { TechProvider } from "../../contexts/TechContext";

export function Providers({ children }) {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
}
