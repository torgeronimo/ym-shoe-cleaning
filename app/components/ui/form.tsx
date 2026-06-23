"use client";

import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./button";
import { bookingSchema, type BookingSchema } from "@/public/lib/schema";
import toast, { Toaster } from 'react-hot-toast';
import Counter from "../ui/counter"

const branches = [
    { name: 'YM Flagship Store' },
    { name: 'YM - Calamba City Bayan' },
    { name: 'YM - Sto. Tomas City' },
    { name: 'YM - San Pablo City' },
    { name: 'YM Las Piñas - BF Resort' },
    { name: 'YM Silang - Westgrove' },
    { name: 'YM Los Baños - UPLB' },
    { name: 'YM Quezon - Tayabas' },
    { name: 'YM Batangas - Alitagtag' },
    { name: 'YM Quezon City - Novaliches' },
    { name: 'YM Cavite - Rosario' },
    { name: 'YM - Legazpi Albay' }
]
type AdditionalService = {
    id: string;
    label: string;
    price: number;
};
const additionalServices = [
    { id: "reglue", label: "Full Reglue", price: 2499 },
    { id: "deodorizing", label: "Deodorizing", price: 199 },
    { id: "leather-treatment", label: "Leather Treatment", price: 199 },
    { id: "plastic-treatment", label: "Plastic Treatment", price: 199 },
    { id: "stain-removal", label: "Stain Removal", price: 299 },
    { id: "stitching", label: "Stitching", price: 699 },
    { id: "color-retouch", label: "Color Retouch", price: 499 },
    { id: "oxidation", label: "Unyellow Oxidation", price: 599 },
    { id: "repaint", label: "Unyellow Repaint", price: 699 },
    { id: "balsam", label: "Balsam", price: 399 },
    { id: "cleaning-kit", label: "YM Cleaning Kit", price: 499 },
    ];
    
const servicePrices: Record<string, number> = {
    "YM Special": 999,
    Gold: 499,
    Silver: 399,
    Bronze: 370,
    "Cap Platinum": 399,
    "Cap Reshape": 499,
    };

    const RUSH_FEE = 99;

    export default function ContactForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const {
        register,
        control,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm<BookingSchema>({
        resolver: zodResolver(bookingSchema),
        mode: "onTouched",
        defaultValues: {
        name: "",
        phone: "",
        branch: "YM Flagship Store",
        serviceType: "YM Special",
        // additionalServices:[],
        notes: "",
        rushFee: false,
        },
    });
    const notify = () => toast.success('We will get back to you.');
    const onSubmit = (data:BookingSchema)=>{
        console.log("Form Data", data)
        notify();
        reset();

    }
    const [selectedServices,setSelectedServices] = useState<AdditionalService[]>([]);
    const selectedService = watch("serviceType");
    const serviceType = watch("serviceType");

    
      // Safe tracking values that satisfy the React Compiler
    // const serviceType = useWatch({ control, name: "serviceType" });
    // const selectedServices = useWatch({ control, name: "additionalServices" }) || [];
    // const rushService = useWatch({ control, name: "rushFee" });

    const handleCheckboxChange = (service: AdditionalService) => {
    setSelectedServices((prev) => {
        const exists = prev.some((item) => item.id === service.id);

        if (exists) {
        return prev.filter((item) => item.id !== service.id);
        }

        return [...prev, service];
        });
    };

    const handleRemovePill = (serviceId:string) => {
    setSelectedServices((prev) =>
        prev.filter((item) => item.id !== serviceId)
    );
    };

    //Pricing Computation
    const basePrice = servicePrices[selectedService || "YM Special"];
    const additionalServicesTotal = selectedServices.reduce(
        (total, service) => {
            return total + (service?.price ?? 0);
        },
        0
    );
    const rushService = watch("rushFee");
    const total = basePrice + additionalServicesTotal + (rushService ? RUSH_FEE : 0);


    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const form = e.currentTarget;

    //     const data = {
    //     name: (form.elements.namedItem("name") as HTMLInputElement).value,
    //     phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    //     ymBranch,
    //     serviceType,
    //     notes: (form.elements.namedItem("comments") as HTMLTextAreaElement).value,
    //     additionalServices: selectedServices,
    //     rushService,
    //     total,
    //     };

    //     console.log(data);
    // };
    // Dynamic calculations based on state-free react-hook-form bindings

    return (
        <>
        <div className="border-main bg-(--color-cream) h-full py-4 px-4">
            <Toaster 
                toastOptions={{
                    className:'',
                    style: {
                        
                        border: '4px solid #000000',
                        padding: '16px',
                        color: '#FFFFFF',
                        background:'#000000'
                    },
                }}  
            />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            {/* NAME */}
            <label className="label" htmlFor="name">YOUR NAME</label>
            {/* {errors?.name && <p className="error-message text-red-400">{errors.name.message}</p>} */}
            <p 
                className={`error-message text-red-400 text-sm transition-all duration-300 ease-in-out overflow-hidden ${errors?.name ? "max-h-12 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"}`}>
                {errors?.name?.message}
            </p>
            <input
                {...register("name")}
                name="name"
                type="text"
                id="name"
                placeholder="FULL NAME"
                className="input"
            />

            {/* PHONE */}
            <label className="label" htmlFor="phone">PHONE NUMBER</label>
            {/* Display the error message under the input */}
            <p 
                className={`error-message text-red-400 text-sm transition-all duration-300 ease-in-out overflow-hidden ${errors?.phone ? "max-h-12 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"}`}>
                {errors?.phone?.message}
            </p>
            <input
                {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                        value: /^(09|\+639)\d{9}$/,
                        message: "Please match the requested format (e.g., 09171234567 or +639171234567)"
                    }
                })}
                name="phone"
                type="tel"
                id="phone"
                placeholder="PHONE NUMBER"
                className="input"
            />

             {/* Branches */}
            <div className="flex flex-col gap-2">
                <label className="label">BRANCH</label>
                <select
                    {...register("branch")}
                    name="branch"
                    id="branch"
                    className="select input"
                >
                    {branches.map((branch)=>(
                        <option key={branch.name} value={branch.name}>
                            {branch.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* SERVICE TYPE */}
            <label className="label">SERVICE TYPE</label>
            <select
                {...register("serviceType")}
                id="service"
                className="select input"
            >
                {Object.keys(servicePrices).map((service) => (
                <option key={service} value={service}>
                    {service}
                </option>
                ))}
            </select>

            {/* ADDITIONAL SERVICES */}
            <div className="">
                <label className="label">ADDITIONAL SERVICES</label>
                {(!selectedServices || selectedServices.length === 0) && ( <p className="text-sm text-gray-500 italic">No additional services</p>)}
                <div className="flex max-w-lg flex-wrap gap-2">

                    {selectedServices.map((service) => (
                        <span key={service.id} className="badge badge-outline">
                            {service.label} <button type="button" className="cursor-pointer hover:text-red-300" onClick={() => handleRemovePill(service.id)} > × </button>
                        </span>
                    ))}
                </div>
                
            </div>
            <Button text={selectedServices && selectedServices.length > 0 ? "Edit Service" : "Add Service"} variant="ghost" onClick={() => setIsModalOpen(true)}/>
            
            {/* NOTES */}
            <label className="label">NOTES</label>
            <textarea
                {...register("notes")}
                name="notes"
                id="notes"
                className="input"
                placeholder="ANY SPECIAL INSTRUCTION..."
            />

            {/* RUSH + TOTAL */}
            <div className="flex justify-between items-center">
                <label className="checkbox-wrap">
                <input
                    {...register("rushFee")}
                    type="checkbox"
                    id="rush-service"
                    className="checkbox"
                />
                <span className="font-display text-gray-500">
                    Rush Service (+₱99)
                </span>
                </label>

                <div className="text-right">
                    <p className="text-sm text-gray-500">
                        Base: ₱<Counter to={basePrice} />
                        {/* Base: ₱{basePrice} */}
                    </p>

                    {additionalServicesTotal > 0 && (
                        <p className="text-sm text-gray-500">
                        {/* Add-ons: ₱{additionalServicesTotal} */}
                        Add-ons: ₱<Counter to={additionalServicesTotal} />
                        </p>
                    )}

                    {rushService && (
                        <p className="text-sm text-gray-500">
                        Rush: ₱{RUSH_FEE}
                        </p>
                    )}

                    <p className="font-bold text-lg">
                        Total: ₱<Counter to={total}/>
                    </p>
                </div>
            </div>

            <Button size="lg" text="Book a clean" />
            </form>
        </div>

        
        {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg">
            <h3 className="label mb-4">ADDITIONAL SERVICES</h3>

            <div className="flex flex-col gap-3">
                {additionalServices.map((service) => (
                <label
                    key={service.id}
                    className="flex items-center gap-3"
                >
                    <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedServices.some(
                        (s) => s.id === service.id
                    )}
                    onChange={() => handleCheckboxChange(service)}
                    />

                    <span className="font-display">
                    {service.label} (+₱{service.price})
                    </span>
                </label>
                ))}
            </div>

            <div className="flex justify-end mt-6">
                <Button
                text="Done"
                variant="ghost"
                size="md"
                onClick={() => setIsModalOpen(false)}
                />
            </div>
            </div>
        </div>
        )}

        </>
    );
}