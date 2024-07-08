import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface AlertDestructiveProps {
  message: string;
}

export function AlertDestructive({
  message = "Sorry, something went wrong.",
}: AlertDestructiveProps) {
  return (
    <Alert variant="default" className="text-red-700 border-red-700">
      <ExclamationTriangleIcon className="h-4 w-4" color="#b91c1c" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
