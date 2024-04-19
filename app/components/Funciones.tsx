

export const calculateDuration = (departureTime: string, arrivalTime: string): number => {
    const [departureHours, departureMinutes] = departureTime.split(':').map(Number);
    const [arrivalHours, arrivalMinutes] = arrivalTime.split(':').map(Number);
    const departureInMinutes = departureHours * 60 + departureMinutes;
    const arrivalInMinutes = arrivalHours * 60 + arrivalMinutes;
    return arrivalInMinutes - departureInMinutes;
};

export const handleSortByPrice = (flights: Flight[]) => {
    const sorted = [...flights].sort((a, b) => a.precio - b.precio);
    return sorted;
};

export const handleSortByDuration = (flights: Flight[]) => {
    const sorted = [...flights].sort((a, b) => {
        const durationA = calculateDuration(a.hora_ida, a.hora_vuelta);
        const durationB = calculateDuration(b.hora_ida, b.hora_vuelta);
        return durationA - durationB;
    });
    return sorted;
};

export const sortByDirectFlight = (flights: Flight[]): Flight[] => {
    return [...flights].sort((a, b) => {
        if (a.tipo_vuelo === 'Directo') return -1;
        if (a.tipo_vuelo === '1 Escala' && b.tipo_vuelo === '2 Escalas') return -1;
        return 1;
    });
};
