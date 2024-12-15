import { Poppins, Lora } from "next/font/google";

// Define the Poppins font
export const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ] as const,
  style: ["normal", "italic"] as const,
  subsets: ["latin", "latin-ext"] as const,
});

// Define the Lora font
export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"] as const,
});
