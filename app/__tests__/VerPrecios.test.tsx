import { calculateDuration, sortByDirectFlight, handleSortByDuration, handleSortByPrice } from '../components/Funciones';

describe('calculateDuration', () => {
  it('calcula correctamente la duración entre dos horas dadas', () => {
    const departureTime = '10:00';
    const arrivalTime = '12:30';
    const expectedDuration = 150; // 2 horas y 30 minutos en minutos
    expect(calculateDuration(departureTime, arrivalTime)).toBe(expectedDuration);
  });
});

describe('sortByDirectFlight', () => {
    it('debería ordenar los vuelos con prioridad a los directos y luego por escalas', () => {
      const flights: Flight[] = [
        { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
        { id: 2, hora_ida: '09:00', hora_vuelta: '11:00', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
        { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 300, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
      ];
      const sortedFlights = sortByDirectFlight(flights);
      const expectedOrder: Flight[] = [
        { id: 2, hora_ida: '09:00', hora_vuelta: '11:00', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
        { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
        { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 300, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
      ];
      expect(sortedFlights).toEqual(expectedOrder);
    });
});

describe('handleSortByDuration', () => {
it('ordena los vuelos por duración ascendente correctamente', () => {
    const flights = [
      { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
      { id: 2, hora_ida: '09:00', hora_vuelta: '11:30', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
      { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 150, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
    ];
    const sortedFlights = handleSortByDuration(flights);
    expect(sortedFlights).toEqual([
      { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
      { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 150, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
      { id: 2, hora_ida: '09:00', hora_vuelta: '11:30', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
    ]);
  });
});

  describe('handleSortByPrice', () => {
    // Prueba para verificar si handleSortByPrice ordena correctamente los vuelos por precio ascendente
    it('ordena los vuelos por precio ascendente correctamente', () => {
        const flights = [
            { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
            { id: 2, hora_ida: '09:00', hora_vuelta: '11:00', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
            { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 150, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
        ];
        const sortedFlights = handleSortByPrice(flights);
        expect(sortedFlights).toEqual([
            { id: 3, hora_ida: '10:00', hora_vuelta: '12:00', precio: 150, tipo_vuelo: '2 Escalas', equipaje: 'Personal' },
            { id: 1, hora_ida: '08:00', hora_vuelta: '10:00', precio: 200, tipo_vuelo: '1 Escala', equipaje: 'Personal' },
            { id: 2, hora_ida: '09:00', hora_vuelta: '11:00', precio: 250, tipo_vuelo: 'Directo', equipaje: 'Personal' },
        ]);
    });
});










  

