'use client';

import { useState, useEffect, useRef } from 'react';

// Define the structure for our services
interface Service {
    id: string;
    name: string;
    price: number;
    }

    const AVAILABLE_SERVICES: Service[] = [
    { id: 'installation', name: 'Professional Installation', price: 50 },
    { id: 'warranty', name: '2-Year Extended Warranty', price: 30 },
    { id: 'delivery', name: 'Express Delivery', price: 15 },
    { id: 'support', name: '24/7 Priority Support', price: 20 },
    ];

    export default function ServiceForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown if the user clicks outside of it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Toggle checkbox selection
    const handleCheckboxChange = (serviceId: string) => {
        setSelectedServices((prev) =>
        prev.includes(serviceId)
            ? prev.filter((id) => id !== serviceId)
            : [...prev, serviceId]
        );
    };

    // Determine button text based on selection
    const getButtonText = () => {
        if (selectedServices.length === 0) return 'Select additional services';
        if (selectedServices.length === 1) return '1 service selected';
        return `${selectedServices.length} services selected`;
    };

    // Calculate live total price
    const totalPrice = selectedServices.reduce((total, id) => {
        const service = AVAILABLE_SERVICES.find((s) => s.id === id);
        return total + (service ? service.price : 0);
    }, 0);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Package data to send to your backend API or Server Action
        const formData = {
        services: selectedServices,
        };

        console.log('Submitting data:', formData);
        
        // Example API fetch request:
        // await fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData) });
        alert(`Form submitted with ${selectedServices.length} services! Total: $${totalPrice}`);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Extra Features
            </label>
            
            {/* Dropdown Container */}
            <div className="relative" ref={dropdownRef}>
            {/* Main Select Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-md text-left text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <span>{getButtonText()}</span>
                <span className="ml-2 text-gray-400 text-xs">{isOpen ? '▲' : '▼'}</span>
            </button>

            {/* Dropdown Options List */}
            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                <div className="py-1 divide-y divide-gray-100">
                    {AVAILABLE_SERVICES.map((service) => (
                    <label
                        key={service.id}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer select-none"
                    >
                        <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleCheckboxChange(service.id)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                        />
                        <span className="flex-1 font-medium">{service.name}</span>
                        <span className="text-gray-500">+${service.price}</span>
                    </label>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>

        {/* Dynamic Price Display */}
        {selectedServices.length > 0 && (
            <div className="p-3 bg-blue-50 text-blue-800 rounded-md text-sm flex justify-between font-medium">
            <span>Additional Services Total:</span>
            <span>${totalPrice}.00</span>
            </div>
        )}

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Submit Order
        </button>
        </form>
    );
}