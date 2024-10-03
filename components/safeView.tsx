import { SafeAreaView } from "react-native-safe-area-context";

interface SafeViewProps {
  children: React.ReactNode;
}

export function SafeView({ children }: SafeViewProps) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}
