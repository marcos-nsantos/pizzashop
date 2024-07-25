import { setupWorker } from "msw/browser";
import { env } from "../../../env.ts";
import { signInMock } from "@/api/mocks/sign-in-mock.tsx";

export const worker = setupWorker(signInMock);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
