import {z} from "zod";

const phPhoneRegex = /^(09|\+639)\d{9}$/;


export const bookingSchema = z.object({
    name: z.string().min(2, {message:"Name must be atleast 2 character"}),
    phone: z.string().regex(phPhoneRegex, {message:"Invalid PH mobile number (e.g 0906 743 8406)"}),
    branch: z.string().min(1),
    serviceType: z.string().optional(),
    // additionalServices:z.array(z.string()).default([]).optional(),
    notes: z.string().trim().optional(),
    rushFee: z.boolean().optional().default(false),

});

export type BookingSchema = z.input<typeof bookingSchema>;