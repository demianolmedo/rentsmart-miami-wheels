
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useVehicle, locations } from '@/context/VehicleContext';

const SearchForm = () => {
  const { selectedLocation, setSelectedLocation } = useVehicle();
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 3))
  );
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnTime, setReturnTime] = useState('10:00');
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', { selectedLocation, pickupDate, returnDate, pickupTime, returnTime });
    
    const locationDisplay = selectedLocation === 'all' 
      ? 'todas las ubicaciones'
      : locations.find(loc => loc.id === selectedLocation)?.name;
    
    toast({
      title: "Búsqueda realizada",
      description: `Buscando vehículos disponibles en ${locationDisplay}.`,
      duration: 3000,
    });
    
    // Scroll to vehicles section
    const vehiclesSection = document.getElementById('vehicles');
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="space-y-3">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-miami-teal" size={18} />
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="pl-10 py-6 border-gray-300">
              <SelectValue placeholder="Encuentra tu vehículo en ubicación" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.id} value={location.id}>
                  {location.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pickup Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal border-gray-300 py-6",
                    !pickupDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-miami-teal" />
                  {pickupDate ? (
                    format(pickupDate, "PP")
                  ) : (
                    <span>Fecha de recogida</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Pickup Time */}
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-miami-teal" size={18} />
            <Select value={pickupTime} onValueChange={setPickupTime}>
              <SelectTrigger className="pl-10 py-6 border-gray-300">
                <SelectValue placeholder="Hora de recogida" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, i) => {
                  const hour = i.toString().padStart(2, '0');
                  return (
                    <React.Fragment key={i}>
                      <SelectItem value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
                      <SelectItem value={`${hour}:30`}>{`${hour}:30`}</SelectItem>
                    </React.Fragment>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Return Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal border-gray-300 py-6",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-miami-teal" />
                  {returnDate ? (
                    format(returnDate, "PP")
                  ) : (
                    <span>Fecha de devolución</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Time */}
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-miami-teal" size={18} />
            <Select value={returnTime} onValueChange={setReturnTime}>
              <SelectTrigger className="pl-10 py-6 border-gray-300">
                <SelectValue placeholder="Hora de devolución" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }).map((_, i) => {
                  const hour = i.toString().padStart(2, '0');
                  return (
                    <React.Fragment key={i}>
                      <SelectItem value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
                      <SelectItem value={`${hour}:30`}>{`${hour}:30`}</SelectItem>
                    </React.Fragment>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type="submit" className="btn-primary w-full py-6 text-lg">
        Buscar Vehículos Disponibles
      </Button>
    </form>
  );
};

export default SearchForm;
