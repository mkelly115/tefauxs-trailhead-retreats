import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { refreshBookingsIfStale } from "./Uploader";

const SESSION_KEY = "sampleDataChecked";

// Shared across mounts so React StrictMode / remounts don't run it twice
let refreshPromise = null;

// On a visitor's first load in this browser session, make sure the sample
// bookings are current (dates relative to today). Re-seeds only if stale.
export function useFreshSampleData() {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(
    () => !sessionStorage.getItem(SESSION_KEY),
  );

  useEffect(
    function () {
      if (!isRefreshing) return;

      if (!refreshPromise) refreshPromise = refreshBookingsIfStale();

      let cancelled = false;
      refreshPromise
        .then(async (didUpload) => {
          sessionStorage.setItem(SESSION_KEY, "true");
          if (didUpload) await queryClient.invalidateQueries();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          if (!cancelled) setIsRefreshing(false);
        });

      return () => {
        cancelled = true;
      };
    },
    [isRefreshing, queryClient],
  );

  return { isRefreshing };
}
