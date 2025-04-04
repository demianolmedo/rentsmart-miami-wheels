
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

// Sample car data
const carData = [
  {
    id: 1,
    name: 'Toyota Corolla',
    category: 'compacto',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 45,
    features: ['Automático', '5 Pasajeros', 'A/C', '2 Maletas', '33 MPG'],
    available: true
  },
  {
    id: 2,
    name: 'Ford Mustang Convertible',
    category: 'deportivo',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 110,
    features: ['Automático', '4 Pasajeros', 'A/C', '2 Maletas', '25 MPG'],
    available: true
  },
  {
    id: 3,
    name: 'Jeep Wrangler',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 85,
    features: ['Automático', '5 Pasajeros', 'A/C', '3 Maletas', '22 MPG'],
    available: true
  },
  {
    id: 4,
    name: 'Honda Civic',
    category: 'economico',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 40,
    features: ['Automático', '5 Pasajeros', 'A/C', '2 Maletas', '36 MPG'],
    available: true
  },
  {
    id: 5,
    name: 'Chevrolet Suburban',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1575224129957-a044be2fa6ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 120,
    features: ['Automático', '8 Pasajeros', 'A/C', '5 Maletas', '20 MPG'],
    available: true
  },
  {
    id: 6,
    name: 'Chevrolet Camaro',
    category: 'deportivo',
    image: 'https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 100,
    features: ['Automático', '4 Pasajeros', 'A/C', '2 Maletas', '22 MPG'],
    available: true
  },
  {
    id: 7,
    name: 'Nissan Versa',
    category: 'economico',
    image: 'https://images.unsplash.com/photo-1614857166059-ca9e0ba9b4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 35,
    features: ['Automático', '5 Pasajeros', 'A/C', '2 Maletas', '32 MPG'],
    available: true
  },
  {
    id: 8,
    name: 'Toyota RAV4',
    category: 'compacto',
    image: 'https://images.unsplash.com/photo-1568291329666-1a7a38137d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 65,
    features: ['Automático', '5 Pasajeros', 'A/C', '3 Maletas', '28 MPG'],
    available: true
  }
];

const CarFleet = () => {
  const [activeTab, setActiveTab] = useState('todos');
  const [priceRange, setPriceRange] = useState([0, 150]);
  
  const filteredCars = carData.filter(car => {
    const categoryMatch = activeTab === 'todos' || car.category === activeTab;
    const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <section id="vehicles" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-miami-navy">Nuestra Flota de Vehículos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Disponemos de una amplia variedad de vehículos para satisfacer todas tus necesidades. Desde coches económicos hasta SUVs espaciosos y deportivos de lujo.
          </p>
        </div>

        <div className="mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-miami-navy">Filtros</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <div className="flex-1">
                  <Tabs defaultValue="todos" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 h-auto">
                      <TabsTrigger value="todos" className="py-2">Todos</TabsTrigger>
                      <TabsTrigger value="economico" className="py-2">Económico</TabsTrigger>
                      <TabsTrigger value="compacto" className="py-2">Compacto</TabsTrigger>
                      <TabsTrigger value="deportivo" className="py-2">Deportivo</TabsTrigger>
                      <TabsTrigger value="suv" className="py-2">SUV</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                  <span className="text-gray-600 whitespace-nowrap">Precio: ${priceRange[0]} - ${priceRange[1]}</span>
                  <div className="flex-1">
                    <Slider
                      defaultValue={[0, 150]}
                      min={0}
                      max={150}
                      step={5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-lg shadow">
            <p className="text-gray-600">No se encontraron vehículos que coincidan con los criterios seleccionados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="car-card flex flex-col h-full">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-miami-teal">
                    ${car.price}/día
                  </Badge>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Check size={14} className="text-miami-teal mr-1" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex gap-2">
                    <Button variant="outline" className="flex-1">Detalles</Button>
                    <Button className="btn-primary flex-1">Reservar</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarFleet;
