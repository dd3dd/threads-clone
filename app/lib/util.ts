import { formatDistanceToNow } from "date-fns";

export function formatTimeDifference(create_at: Date): string {
  const result = formatDistanceToNow(create_at, {
    addSuffix: false,
  });
  if (result[0] === "a") return result.slice(6);
  return result;
}
