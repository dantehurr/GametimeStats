export function gameDate(timeInput: string) {
    const date = new Date(timeInput);
    const dayCode = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return `${dayCode} ${time}`;
}