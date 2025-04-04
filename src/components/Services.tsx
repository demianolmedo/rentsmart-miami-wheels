
import React from 'react';
import { Shield, Clock, MapPin, CreditCard, Headphones, Map } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-10 h-10 text-miami-teal" />,
    title: 'Seguros Completos',
    description: 'Ofrecemos diversas opciones de cobertura para garantizar tu tranquilidad durante el viaje.'
  },
  {
    icon: <Clock className="w-10 h-10 text-miami-teal" />,
    title: 'Servicio 24/7',
    description: 'Atención al cliente disponible todos los días a cualquier hora para asistirte.'
  },
  {
    icon: <MapPin className="w-10 h-10 text-miami-teal" />,
    title: 'Múltiples Ubicaciones',
    description: 'Recoge tu vehículo en el aeropuerto o en cualquiera de nuestras sucursales en Miami.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-miami-teal" />,
    title: 'Sin Cargos Ocultos',
    description: 'Precios transparentes sin sorpresas, lo que ves es lo que pagas.'
  },
  {
    icon: <Headphones className="w-10 h-10 text-miami-teal" />,
    title: 'Soporte Premium',
    description: 'Asistencia personalizada durante todo el proceso de alquiler para resolver cualquier duda.'
  },
  {
    icon: <Map className="w-10 h-10 text-miami-teal" />,
    title: 'GPS Incluido',
    description: 'Sistema de navegación incluido para que te orientes fácilmente en tu destino.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-miami-navy">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En RentSmart Miami Wheels, nos esforzamos por brindarte una experiencia de alquiler sin preocupaciones con servicios pensados para tu comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-miami-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
