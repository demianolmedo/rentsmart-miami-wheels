
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    location: 'Visitante de España',
    rating: 5,
    text: 'Excelente servicio desde el primer momento. El coche estaba impecable y el proceso de recogida y devolución fue rápido y sin complicaciones. Definitivamente volveré a alquilar con RentSmart en mi próxima visita a Miami.'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    location: 'Viaje de Negocios, México',
    rating: 5,
    text: 'Como viajero frecuente por trabajo, valoro la eficiencia y la profesionalidad. RentSmart cumplió con todas mis expectativas. El SUV que alquilé era perfecto para mis reuniones por la ciudad.'
  },
  {
    id: 3,
    name: 'Jennifer Smith',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    location: 'Vacaciones Familiares, California',
    rating: 4,
    text: 'Viajamos en familia y necesitábamos un vehículo espacioso. El proceso online fue sencillo, y cuando llegamos ya estaba todo listo. El personal fue amable y nos explicaron todas las características del coche.'
  },
  {
    id: 4,
    name: 'Luis Morales',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Viaje de Placer, Colombia',
    rating: 5,
    text: 'Alquilé un convertible para recorrer Miami y fue una experiencia increíble. La atención al cliente es excepcional, y los precios son muy competitivos comparados con otras empresas del aeropuerto.'
  },
  {
    id: 5,
    name: 'Sophie Dupont',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    location: 'Viajera de Francia',
    rating: 5,
    text: 'Primera vez en Miami y decidí alquilar con RentSmart por recomendación. No me arrepiento. Proceso sin estrés, coche en perfectas condiciones y el GPS incluido fue de gran ayuda.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-miami-navy text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Miles de viajeros han confiado en RentSmart Miami Wheels para sus desplazamientos. Descubre por qué somos la opción preferida en Miami.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-miami-teal">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-300">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < testimonial.rating ? "text-miami-coral fill-miami-coral" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-100 italic flex-1">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static mx-2 bg-miami-teal text-white hover:bg-miami-teal/80" />
            <CarouselNext className="relative static mx-2 bg-miami-teal text-white hover:bg-miami-teal/80" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
