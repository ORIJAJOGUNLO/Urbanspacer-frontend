import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google"; // Import another font

// Define the Poppins font
export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] as const,
    style: ["normal", "italic"] as const,
    subsets: ["latin", "latin-ext"] as const
});

// Define the Roboto font
export const roboto = Roboto({
    weight: ["400", "500", "700"] as const,
    style: ["normal", "italic"] as const,
    subsets: ["latin", "latin-ext"] as const
});