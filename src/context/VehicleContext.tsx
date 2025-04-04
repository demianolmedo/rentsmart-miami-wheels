
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the vehicle type
export interface Vehicle {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  features: string[];
  available: boolean;
}

// Default vehicle data
const defaultVehicle = {
  id: 1,
  name: 'Toyota Corolla',
  category: 'compacto',
  image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 45,
  features: ['Automático', '5 Pasajeros', 'A/C', '2 Maletas', '33 MPG'],
  available: true
};

interface VehicleContextType {
  selectedVehicle: Vehicle;
  setSelectedVehicle: (vehicle: Vehicle) => void;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(defaultVehicle);

  return (
    <VehicleContext.Provider value={{ selectedVehicle, setSelectedVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
};
