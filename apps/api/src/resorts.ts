export interface Resort {
    id: number;
    name: string;
    timezone: string;
    countryCode: string;  
}

const resorts: Resort[] = [
    { id: 1, name: "Vail", timezone: "America/Denver", countryCode: "US" },
    { id: 2, name: "Park City", timezone: "America/Denver", countryCode: "US" },
    { id: 3, name: "Jackson Hole", timezone: "America/Denver", countryCode: "US" },
    { id: 4, name: "Whistler Blackcomb", timezone: "America/Vancouver", countryCode: "CA" },
    { id: 5, name: "Niseko United", timezone: "Asia/Tokyo", countryCode: "JP" }
];

export function getResortById(id: number): Resort | undefined {
    return resorts.find(resort => resort.id === id);
}

export function sortedByName(): Resort[] {
    return resorts.toSorted((a, b) => a.name.localeCompare(b.name));
}

export function parseResortId(input: string): number | null {
    const inputNum: number = +input;
    const isValid: boolean = Number.isInteger(inputNum) && inputNum + "" === input && inputNum > 0;
    if (isValid) {
        return inputNum;
    }
    return null;
}