import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CircleAlert } from "lucide-react";
interface AlertDestructiveProps {
  message?: string;
}

export function AlertDestructive({
  message = "Sorry, something went wrong.",
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive" className="flex-col space-x-2 w-full">
      <CircleAlert className="h-[1.4rem] w-[1.4rem]" />
      <div className="pt-[11px]">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </div>
    </Alert>
  );
}
