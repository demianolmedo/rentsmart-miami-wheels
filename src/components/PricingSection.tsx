
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Plus, Minus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useVehicle } from '@/context/VehicleContext';
import { useToast } from '@/components/ui/use-toast';

const PricingSection = () => {
  const { selectedVehicle } = useVehicle();
  const { toast } = useToast();

  const [extras, setExtras] = useState({
    fullInsurance: false,
    additionalDriver: false,
    gps: false,
    childSeat: false,
  });

  const extraPrices = {
    fullInsurance: 15,
    additionalDriver: 10,
    gps: 5,
    childSeat: 7,
  };

  const toggleExtra = (extra: keyof typeof extras) => {
    setExtras(prev => ({
      ...prev,
      [extra]: !prev[extra]
    }));
  };

  const calculateTotal = () => {
    let total = selectedVehicle.price;
    Object.entries(extras).forEach(([key, value]) => {
      if (value) {
        total += extraPrices[key as keyof typeof extraPrices];
      }
    });
    return total;
  };

  const handleProceedToBooking = () => {
    toast({
      title: "Reserva en proceso",
      description: `Estás reservando un ${selectedVehicle.name} por $${calculateTotal()}/día.`,
      duration: 5000,
    });
  };

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-miami-navy">Cotización Transparente</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personaliza tu alquiler con los extras que necesites y obtén una cotización detallada y sin sorpresas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Vehicle Details */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-miami-navy">Vehículo Seleccionado</h3>
              
              <div className="flex items-center mb-6">
                <img 
                  src={selectedVehicle.image} 
                  alt={selectedVehicle.name} 
                  className="w-32 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-lg font-medium">{selectedVehicle.name}</h4>
                  <p className="text-gray-600">Tarifa base: ${selectedVehicle.price}/día</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-miami-navy">Extras Disponibles</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">Seguro a Todo Riesgo</h4>
                    <p className="text-sm text-gray-600">Cobertura completa sin franquicia</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">${extraPrices.fullInsurance}/día</span>
                    <Button 
                      variant={extras.fullInsurance ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleExtra('fullInsurance')}
                      className={extras.fullInsurance ? "bg-miami-teal hover:bg-miami-teal/90" : ""}
                    >
                      {extras.fullInsurance ? <Minus size={16} /> : <Plus size={16} />}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">Conductor Adicional</h4>
                    <p className="text-sm text-gray-600">Añade un segundo conductor</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">${extraPrices.additionalDriver}/día</span>
                    <Button 
                      variant={extras.additionalDriver ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleExtra('additionalDriver')}
                      className={extras.additionalDriver ? "bg-miami-teal hover:bg-miami-teal/90" : ""}
                    >
                      {extras.additionalDriver ? <Minus size={16} /> : <Plus size={16} />}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">GPS</h4>
                    <p className="text-sm text-gray-600">Sistema de navegación</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">${extraPrices.gps}/día</span>
                    <Button 
                      variant={extras.gps ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleExtra('gps')}
                      className={extras.gps ? "bg-miami-teal hover:bg-miami-teal/90" : ""}
                    >
                      {extras.gps ? <Minus size={16} /> : <Plus size={16} />}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">Silla Infantil</h4>
                    <p className="text-sm text-gray-600">Para niños de 9-36kg</p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">${extraPrices.childSeat}/día</span>
                    <Button 
                      variant={extras.childSeat ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleExtra('childSeat')}
                      className={extras.childSeat ? "bg-miami-teal hover:bg-miami-teal/90" : ""}
                    >
                      {extras.childSeat ? <Minus size={16} /> : <Plus size={16} />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Summary */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-miami-navy">Resumen de Cotización</h3>
              
              <div className="mb-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tarifa base</span>
                  <span className="font-medium">${selectedVehicle.price}/día</span>
                </div>
                
                {extras.fullInsurance && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seguro a Todo Riesgo</span>
                    <span className="font-medium">${extraPrices.fullInsurance}/día</span>
                  </div>
                )}
                
                {extras.additionalDriver && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conductor Adicional</span>
                    <span className="font-medium">${extraPrices.additionalDriver}/día</span>
                  </div>
                )}
                
                {extras.gps && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">GPS</span>
                    <span className="font-medium">${extraPrices.gps}/día</span>
                  </div>
                )}
                
                {extras.childSeat && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Silla Infantil</span>
                    <span className="font-medium">${extraPrices.childSeat}/día</span>
                  </div>
                )}
                
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="font-semibold">Total diario</span>
                  <span className="font-bold text-miami-teal text-xl">${calculateTotal()}/día</span>
                </div>
                
                <div className="text-sm text-gray-500 mt-2">
                  <p>Precio estimado para 3 días: <span className="font-semibold">${calculateTotal() * 3}</span></p>
                </div>
              </div>
              
              <Button className="btn-primary w-full py-6 mb-4" onClick={handleProceedToBooking}>
                Proceder a la Reserva
              </Button>
              
              <div className="bg-white p-4 rounded-md border border-gray-200">
                <h4 className="font-medium mb-2">Lo que incluye:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-miami-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Kilometraje ilimitado</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-miami-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Seguro básico</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-miami-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Asistencia en carretera 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-miami-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Cancelación gratuita hasta 48h antes</span>
                  </li>
                </ul>
              </div>
              
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="policies">
                  <AccordionTrigger className="text-miami-navy">Políticas de Alquiler</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>Edad mínima: 21 años con licencia válida</li>
                      <li>Se requiere tarjeta de crédito a nombre del conductor</li>
                      <li>El tanque debe devolverse como se entregó</li>
                      <li>No se permite fumar en los vehículos</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
