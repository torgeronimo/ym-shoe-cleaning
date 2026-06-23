"use server";

import { bookingSchema } from "@/public/lib/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBooking(data: unknown) {
    const validated = bookingSchema.safeParse(data);

    if (!validated.success) {
        return {
        success: false,
        errors: validated.error.flatten().fieldErrors,
        };
    }

    const booking = validated.data;
    
    await resend.emails.send({
        from: "booking@yourdomain.com",
        to: "admin@ymshoecleaning.com",
        subject: "New Shoe Cleaning Booking",

        html: `
        <h2>YM New Booking</h2>

        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Branch:</strong> ${booking.branch}</p>
        `,
    });

    return {
        success: true,
    };
}