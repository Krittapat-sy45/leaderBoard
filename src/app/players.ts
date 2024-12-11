export interface Players {
    name : string,
    score1 : number| null,
    score2 : number| null,
    score3 : number| null,
    score4 : number| null,
    score5 : number| null,
    allScore: number
}


export interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

