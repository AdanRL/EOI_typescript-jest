import { countChars } from "./adapters"
// TODO Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner, you can assume that the input data is always a non empty string, no need to verify it.

// should return an object with the 'total' number ocurrences and the 'value' string;

// if there is more than 50 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value

// if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed second limit value

// if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed third limit' value

// if there is more than 200 occurrences we should add new prop 'limit' to object with 'It has passed fourth limit' value

// if there is more than 250 occurrences we should add new prop 'limit' to object with 'It has passed the last limit' value and another prop 'invalid' with true value



export const removeExclamations = (sentence: string) => {
    const ocurrences = countChars('!', sentence);
    if (ocurrences >= 50 && ocurrences <= 99) {
        return {
            total: ocurrences,
            value: sentence,
            limit: 'It has passed first limit'
        }
    }
    if (ocurrences >= 100 && ocurrences <= 149) {
        return {
            total: ocurrences,
            value: sentence,
            limit: 'It has passed second limit'
        }
    }

    if (ocurrences >= 150 && ocurrences <= 199) {
        return {
            total: ocurrences,
            value: sentence,
            limit: 'It has passed third limit'
        }
    }

    if (ocurrences >= 200 && ocurrences <= 249) {
        return {
            total: ocurrences,
            value: sentence,
            limit: 'It has passed fourth limit'
        }
    }

    if (ocurrences >= 250) {
        return {
            total: ocurrences,
            value: sentence,
            limit: 'It has passed the last limit',
            invalid: true
        }
    }
    return {
        total: ocurrences,
        value: sentence
    }
}
