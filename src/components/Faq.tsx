
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: '¿Cuáles son los requisitos para alquilar un vehículo?',
    answer: 'Para alquilar un vehículo en RentSmart Miami Wheels necesitas: tener al menos 21 años de edad, poseer una licencia de conducir válida con al menos 1 año de antigüedad, y una tarjeta de crédito a nombre del conductor principal para el depósito de seguridad. Para conductores menores de 25 años puede aplicarse un cargo adicional.'
  },
  {
    question: '¿Qué documentos necesito llevar al recoger el vehículo?',
    answer: 'Debes presentar tu licencia de conducir válida, pasaporte o identificación, la tarjeta de crédito utilizada para la reserva, y tu voucher de confirmación (digital o impreso). Para conductores internacionales, se recomienda traer una licencia de conducir internacional además de la licencia de su país.'
  },
  {
    question: '¿Cuál es la política de combustible?',
    answer: 'Seguimos una política de "mismo nivel". Esto significa que te entregamos el vehículo con el tanque lleno y debes devolverlo en las mismas condiciones. Si el vehículo se devuelve con menos combustible, se te cobrará la diferencia más un cargo por servicio de repostaje.'
  },
  {
    question: '¿Puedo modificar o cancelar mi reserva?',
    answer: 'Sí, puedes modificar o cancelar tu reserva accediendo a tu cuenta o contactando directamente con nuestro servicio de atención al cliente. Las cancelaciones realizadas con más de 48 horas de antelación son gratuitas. Para cambios o cancelaciones con menos de 48 horas, puede aplicarse un cargo según nuestras condiciones.'
  },
  {
    question: '¿Qué cobertura de seguro incluye el alquiler?',
    answer: 'Todos nuestros alquileres incluyen un seguro básico de responsabilidad civil que cubre daños a terceros. Ofrecemos opciones de seguro adicionales como cobertura contra colisiones (CDW), protección contra robo (TP) y seguro personal (PAI). Recomendamos revisar detalladamente las coberturas al momento de la reserva.'
  },
  {
    question: '¿Hay límite de kilometraje?',
    answer: 'La mayoría de nuestras tarifas incluyen kilometraje ilimitado, lo que te permite recorrer la distancia que necesites sin cargos adicionales. Algunas categorías especiales de vehículos pueden tener restricciones, lo cual estará claramente indicado en la confirmación de tu reserva.'
  },
  {
    question: '¿Puedo devolver el vehículo en una ubicación diferente?',
    answer: 'Sí, ofrecemos el servicio de devolución en ubicación diferente ("one-way rental"). Este servicio está sujeto a disponibilidad y conlleva un cargo adicional que varía según la distancia entre las ubicaciones de recogida y devolución.'
  },
  {
    question: '¿Qué ocurre si tengo un accidente o el vehículo se avería?',
    answer: 'En caso de accidente o avería, debes contactar inmediatamente con nuestro servicio de asistencia 24/7 al número proporcionado en tus documentos de alquiler. Todos nuestros vehículos incluyen asistencia en carretera. Para accidentes, es importante obtener un informe policial y no admitir responsabilidad sin consultar con nosotros.'
  }
];

const Faq = () => {
  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-miami-navy">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestro servicio de alquiler de vehículos en Miami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-miami-navy hover:text-miami-teal py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
          <div className="inline-flex gap-4">
            <a href="#contact" className="text-miami-teal hover:text-miami-navy font-medium transition-colors">
              Contáctanos
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-miami-teal hover:text-miami-navy font-medium transition-colors">
              Ver todas las preguntas frecuentes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
