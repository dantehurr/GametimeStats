export function dateConfiguration(date: any) {
    const configDate = (date: any) => {

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const aNewDay = `${year}-${month}-${day}`;

    return aNewDay;
    }    


    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    //console.log('Date:', configDate(tomorrow));

    return configDate(tomorrow);
}