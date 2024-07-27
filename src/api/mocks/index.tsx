import { approveOrderMock } from "@/api/mocks/approve-order-mock.ts";
import { cancelOrderMock } from "@/api/mocks/cancel-order-mock.ts";
import { deliverOrderMock } from "@/api/mocks/deliver-order-mock.ts";
import { dispatchOrderMock } from "@/api/mocks/dispatch-oder-mock.ts";
import { getDailyRevenueInPeriodMock } from "@/api/mocks/get-daily-revenue-in-period-mock.ts";
import { getDayOrdersAmountMock } from "@/api/mocks/get-day-orders-amount-mock.ts";
import { getManagedRestaurantMock } from "@/api/mocks/get-managed-restaurant-mock.ts";
import { getMonthCanceledOrdersAmountMock } from "@/api/mocks/get-month-canceled-amount-mock.ts";
import { getMonthOrdersAmountMock } from "@/api/mocks/get-month-orders-amount-mock.ts";
import { getMonthRevenueMock } from "@/api/mocks/get-month-revenue-mock.ts";
import { getOrderDetailsMock } from "@/api/mocks/get-order-details-mock.ts";
import { getOrdersMock } from "@/api/mocks/get-orders-mock.ts";
import { getPopularProductsMock } from "@/api/mocks/get-popular-products-mock.ts";
import { getProfileMock } from "@/api/mocks/get-profile-mock.ts";
import { registerRestaurantMock } from "@/api/mocks/register-restaurant-mock.ts";
import { signInMock } from "@/api/mocks/sign-in-mock.tsx";
import { updateProfileMock } from "@/api/mocks/update-profile-mock.ts";
import { setupWorker } from "msw/browser";
import { env } from "../../../env.ts";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
