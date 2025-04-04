
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Soy el asistente virtual de RentSmart Miami Wheels. ¿En qué puedo ayudarte hoy?',
      time: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const botResponses = {
    default: "Lo siento, no tengo información sobre eso. ¿Puedo ayudarte con algo más sobre nuestros servicios de alquiler?",
    greeting: "¡Hola! ¿En qué puedo ayudarte hoy con tu alquiler de vehículo en Miami?",
    pricing: "Nuestros precios varían según el tipo de vehículo y la temporada. Tenemos coches desde $35/día para económicos, hasta $120/día para SUVs premium. ¿Qué tipo de vehículo te interesa?",
    location: "Nuestra oficina principal está en el Aeropuerto Internacional de Miami. También tenemos puntos de servicio en Miami Beach, Downtown Miami y Fort Lauderdale. ¿Te gustaría información sobre alguna ubicación específica?",
    requirements: "Para alquilar necesitas: ser mayor de 21 años, tener licencia de conducir válida con al menos 1 año de antigüedad, y una tarjeta de crédito a tu nombre para el depósito. ¿Necesitas información adicional sobre los requisitos?",
    contact: "Puedes contactarnos al +1 (305) 555-1234 o por email a info@rentsmartmiami.com. ¿Prefieres que un agente te llame?"
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      sender: 'user',
      text: inputMessage,
      time: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botReply = botResponses.default;
      
      // Simple keyword matching for demo purposes
      const lowerCaseInput = inputMessage.toLowerCase();
      if (lowerCaseInput.includes('hola') || lowerCaseInput.includes('buenos días') || lowerCaseInput.includes('buenas tardes')) {
        botReply = botResponses.greeting;
      } else if (lowerCaseInput.includes('precio') || lowerCaseInput.includes('costo') || lowerCaseInput.includes('tarifa')) {
        botReply = botResponses.pricing;
      } else if (lowerCaseInput.includes('ubicación') || lowerCaseInput.includes('oficina') || lowerCaseInput.includes('donde están')) {
        botReply = botResponses.location;
      } else if (lowerCaseInput.includes('requisito') || lowerCaseInput.includes('necesito') || lowerCaseInput.includes('documentos')) {
        botReply = botResponses.requirements;
      } else if (lowerCaseInput.includes('contacto') || lowerCaseInput.includes('teléfono') || lowerCaseInput.includes('email')) {
        botReply = botResponses.contact;
      }
      
      const botMessage = {
        sender: 'bot',
        text: botReply,
        time: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 right-5 rounded-full bg-miami-teal text-white p-4 shadow-lg z-50 hover:bg-miami-teal/90 ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden max-h-[500px] border border-gray-200">
          {/* Chat Header */}
          <div className="bg-miami-teal text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-semibold">Asistente RentSmart</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-miami-teal/90 h-8 w-8"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50" style={{ minHeight: '300px', maxHeight: '400px' }}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex mb-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-miami-teal text-white flex items-center justify-center mr-2 flex-shrink-0">
                    <MessageCircle size={16} />
                  </div>
                )}
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-miami-teal text-white' 
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 text-right opacity-70">
                    {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center ml-2 flex-shrink-0">
                    <span className="text-xs font-medium">Tú</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <Input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 mr-2"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-miami-teal hover:bg-miami-teal/90"
                size="icon"
              >
                <Send size={18} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Respuesta instantánea disponible 24/7
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
