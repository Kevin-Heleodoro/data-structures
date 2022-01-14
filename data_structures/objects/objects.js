// https://eloquentjavascript.net/code#4 
// Link to Grokking journal entry data

let JOURNAL = []

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false); 
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// false false => 00 -> 0
// false true => 01 -> 1
// true false => 10 -> 2
// true true => 11 -> 3

// 11*00 - 10*01 divided by
// sqrt(1n * 0n * n1 * n0)

// true squirrel  true pizza -> 1
// true squirrel  false pizza -> 4
// false squirrel  true pizza  -> 9
// false squirrel false pizza  -> 76

let pizzaSquirrel = [76, 9, 4, 1];

// Returns the likelihood of a combination of events being related
function phi(table){ 
    return (
        ((table[3] * table[0]) - (table[2] * table[1])) /
        Math.sqrt(
            (table[3] + table[2]) * 
            (table[0] + table[1]) *
            (table[0] + table[2]) *
            (table[1] + table[3]))
    )
}

function tableFor(event, journal) {
    let table = [0,0,0,0];
    for(let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0; // index resets at every iteration
        if(entry.events.includes(event)) index +=1; 
        if(entry.squirrel) index +=2;
        table[index] +=1 
    }
}

// if neither are found, table[0] ++ 
// if only the event is found, table[1] ++
// if only squirrel is found, table[2] ++
// if both are found, table[3] ++


function journalEvents(journal) {
    const allEvents = []
    for(let entry of journal) {
        for(let event of entry.events) {
            if(!allEvents.includes(event)) allEvents.push(event);
        }
    }
    return allEvents;
}

function correlator(journal) {
    for(let event of journalEvents(journal)) {
        let correlation = phi(tableFor(event, journal))
        if(correlation > 0.1 || correlation < -0.1){
            console.log(`${event}: ${correlation}`)
        }
    }
}

// After examining the output from correlator() insert the highest and lowest correlator 
function correlatorChecker(trigger, deterrant) {
    for (let entry of JOURNAL) {
        if (entry.events.includes(trigger) && !entry.events.includes(deterrant)) { 
            entry.events.push("suspected cause"); // creates a new event on days that the most likely trigger was present and the most likely deterrant was not.
        } 
    }
    console.log(phi(tableFor("suspected cause", JOURNAL)))
}

