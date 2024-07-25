import { setupWorker } from "msw/browser";
import { env } from "../../../env.ts";
import { signInMock } from "@/api/mocks/sign-in-mock.tsx";
import { registerRestaurantMock } from "@/api/mocks/register-restaurant-mock.ts";

export const worker = setupWorker(signInMock, registerRestaurantMock);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
