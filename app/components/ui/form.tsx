// import Button from "./button"

// export default function ContactForm(){
//     return(
//         <div className="border-main bg-(--color-cream) h-full py-4 px-4">
//             <form className="flex flex-col gap-4">
//                 <label htmlFor="name" className="label">YOUR NAME</label>
//                 <input type="text" id="name" placeholder="FULL NAME" className="input"></input>
//                 <label htmlFor="phone" className="label">PHONE NUMBER</label>
//                 <input type="tel" pattern="^(09|\+639)\d{9}$" id="phone" placeholder="PHONE NUMBER" className="input"></input>
//                 <label htmlFor="service" className="label">SERVICE TYPE</label>
//                 <select id="service" className="select input">
//                     <option value="">YM Special</option>
//                     <option value="">Gold</option>
//                     <option value="">Silver</option>
//                     <option value="">Bronze</option>
//                     <option value="">Cap Platinum</option>
//                     <option value="">Cap Reshape</option>
//                 </select>
//                 <label htmlFor="comments" className="label">NOTES</label>
//                 <textarea id="comments" className="input"  placeholder="ANY SPECIAL INSTRUCTION..."></textarea>
//                 <div className="checkbox-wrap">
//                     <input type="checkbox" className="checkbox"></input><span className="font-display text-gray-500">Rush Service(+₱99)</span>
//                 </div>
//                 <Button size="lg" text="Book a clean"></Button>

//             </form>
//         </div>
//     );
// }


"use client";

import { useState } from "react";
import Button from "./button";

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
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [serviceType, setServiceType] = useState("YM Special");
    const [ymBranch, setYmBranch] = useState("YM - Flagship Store")
    const [rushService, setRushService] = useState(false);

    const toggleService = (id: string) => {
        setSelectedServices((prev) =>
        prev.includes(id)
            ? prev.filter((s) => s !== id)
            : [...prev, id]
        );
    };

    const servicePrice = servicePrices[serviceType] ?? 0;

    const additionalServicesTotal = selectedServices.reduce(
        (total, id) => {
        const service = additionalServices.find((s) => s.id === id);
        return total + (service?.price ?? 0);
        },
        0
    );

    const total =
        servicePrice +
        additionalServicesTotal +
        (rushService ? RUSH_FEE : 0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const data = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        serviceType,
        notes: (form.elements.namedItem("comments") as HTMLTextAreaElement).value,
        rushService,
        additionalServices: selectedServices,
        total,
        };

        console.log(data);
    };

    return (
        <>
        <div className="border-main bg-(--color-cream) h-full py-4 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
            <label className="label">YOUR NAME</label>
            <input
                name="name"
                type="text"
                id="name"
                placeholder="FULL NAME"
                className="input"
            />

            {/* PHONE */}
            <label className="label">PHONE NUMBER</label>
            <input
                name="phone"
                type="tel"
                id="phone"
                placeholder="PHONE NUMBER"
                pattern="^(09|\\+639)\\d{9}$"
                className="input"
            />

             {/* Branches */}
            <div className="flex flex-col gap-2">
                <label className="label">BRANCH</label>
                <select
                    name="branch"
                    id="branch"
                    className="select input"
                    value={ymBranch}
                    onChange={(e) => setYmBranch(e.target.value)}
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
                name="service"
                id="service"
                className="select input"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
            >
                {Object.keys(servicePrices).map((service) => (
                <option key={service} value={service}>
                    {service}
                </option>
                ))}
            </select>

            {/* ADDITIONAL SERVICES */}
            <div className="flex flex-col gap-2">
                <label className="label">ADDITIONAL SERVICES</label>

                {selectedServices.length > 0 && (
                <div className="flex flex-wrap gap-2 max-w-md">
                    {selectedServices.map((id) => {
                    const service = additionalServices.find(
                        (s) => s.id === id
                    );

                    return (
                        <span key={id} className="badge badge-outline">
                        {service?.label}
                        </span>
                    );
                    })}
                </div>
                
                )}
                <Button text="Add Service" variant="ghost" onClick={() => setIsModalOpen(true)}/>
            </div>
            

            {/* NOTES */}
            <label className="label">NOTES</label>
            <textarea
                name="comments"
                id="comments"
                className="input"
                placeholder="ANY SPECIAL INSTRUCTION..."
            />

            {/* RUSH + TOTAL */}
            <div className="flex justify-between items-center">
                <label className="checkbox-wrap">
                <input
                    type="checkbox"
                    id="rush-service"
                    className="checkbox"
                    checked={rushService}
                    onChange={(e) => setRushService(e.target.checked)}
                />
                <span className="font-display text-gray-500">
                    Rush Service (+₱99)
                </span>
                </label>

                <div className="text-right">
                <p className="text-sm text-gray-500">
                    Base: ₱{servicePrice}
                </p>

                {additionalServicesTotal > 0 && (
                    <p className="text-sm text-gray-500">
                    Add-ons: ₱{additionalServicesTotal}
                    </p>
                )}

                {rushService && (
                    <p className="text-sm text-gray-500">
                    Rush: ₱{RUSH_FEE}
                    </p>
                )}

                <p className="font-bold text-lg">
                    Total: ₱{total}
                </p>
                </div>
            </div>

            <Button size="lg" text="Book a clean" />
            </form>
        </div>

        {/* MODAL */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg">
                <h3 className="label mb-4">ADDITIONAL SERVICES</h3>

                <div className="flex flex-col gap-3">
                {additionalServices.map((service) => (
                    <label
                    key={service.id}
                    className="flex items-center gap-3"
                    >
                    <input
                        type="checkbox" className="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                    />
                    <span className="font-display">
                        {service.label} (+₱{service.price})
                    </span>
                    </label>
                ))}
                </div>

                <div className="flex justify-end mt-6">
                    <Button text="Done" variant="ghost" onClick={() => setIsModalOpen(false)} size="md"></Button>
                </div>
            </div>
            </div>
        )}
        </>
    );
    }