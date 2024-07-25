import { setupWorker } from "msw/browser";
import { env } from "../../../env.ts";
import { signInMock } from "@/api/mocks/sign-in-mock.tsx";
import { registerRestaurantMock } from "@/api/mocks/register-restaurant-mock.ts";
import { getDayOrdersAmountMock } from "@/api/mocks/get-day-orders-amount-mock.ts";
import { getMonthOrdersAmountMock } from "@/api/mocks/get-month-orders-amount-mock.ts";
import { getMonthCanceledOrdersAmountMock } from "@/api/mocks/get-month-canceled-amount-mock.ts";
import { getMonthRevenueMock } from "@/api/mocks/get-month-revenue-mock.ts";
import { getDailyRevenueInPeriodMock } from "@/api/mocks/get-daily-revenue-in-period-mock.ts";
import { getPopularProductsMock } from "@/api/mocks/get-popular-products-mock.ts";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
