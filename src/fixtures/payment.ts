import type { DbPayment } from "~/types";

export const paymentsFixture: DbPayment[] = [
  {
    allowanceId: "3",
    createdAt: "123456",
    description: "A blue bird?!",
    destination: "Space",
    host: "pro.kollider.xyz",
    id: 4,
    location: "kollider",
    name: "Kollider",
    paymentHash: "123",
    paymentRequest: "123",
    preimage: "123",
    totalAmount: 1000,
    totalFees: 111,
  },
  {
    allowanceId: "3",
    createdAt: "123456",
    description: "A yellow bird?!",
    destination: "Space",
    host: "pro.kollider.xyz",
    id: 5,
    location: "kollider",
    name: "Kollider",
    paymentHash: "123",
    paymentRequest: "123",
    preimage: "123",
    totalAmount: "2000",
    totalFees: 222,
  },
];