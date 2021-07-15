// Assume time is in hours on a 24 hour clock.
interface TimeBlock {
    start: number,
    end: number
}

/**
 * Give a list of busy time blocks, provide us a list of free time blocks.
 * Busy time blocks may overlap.
 */
function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] 


/**
 * These were every single one of Copilot's suggestions, even with the above documentation present.
 * 
 * None of these are implemented properly and the time it took to even run each solution
 * (ignoring code review time) was enough so that I likely could have implemented it by hand.
 *
 */

/*
Synthesizing 10/10 solutions

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    const availableTimes: TimeBlock[] = [];

    busyTimes.forEach(busyTime => {
        const start = busyTime.start;
        const end = busyTime.end;

        for (let i = start; i <= end; i++) {
            const availableTime = {
                start: i,
                end: i
            };

            if (!availableTimes.some(availableTime => availableTime.start === availableTime.end)) {
                availableTimes.push(availableTime);
            }
        }
    });

    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let availableTimes: TimeBlock[] = [];
    busyTimes.forEach(busyTime => {
        let start = busyTime.start;
        let end = busyTime.end;
        busyTimes.forEach(otherBusyTime => {
            if (otherBusyTime.start > end) {
                return;
            }
            if (otherBusyTime.end < start) {
                return;
            }
            start = Math.min(start, otherBusyTime.start);
            end = Math.max(end, otherBusyTime.end);
        });
        if (start < end) {
            availableTimes.push({ start: start, end: end });
        }
    });
    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let availableTimes: TimeBlock[] = [];
    busyTimes.forEach(busyTime => {
        busyTime.start = busyTime.start % 24;
        busyTime.end = busyTime.end % 24;
        for (let i = busyTime.start; i < busyTime.end; i++) {
            availableTimes.push({ start: i, end: i + 1 });
        }
    });
    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let freeTimes: TimeBlock[] = [];

    busyTimes.forEach(busyTime => {
        busyTime.start = busyTime.start % 24;
        busyTime.end = busyTime.end % 24;

        for (let i = busyTime.start; i <= busyTime.end; i++) {
            if (!freeTimes.some(freeTime => freeTime.start === i)) {
                freeTimes.push({
                    start: i,
                    end: i
                });
            }
        }
    });

    return freeTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let freeTimes: TimeBlock[] = [];
    busyTimes.forEach(busyTime => {
        busyTime.start = busyTime.start % 24;
        busyTime.end = busyTime.end % 24;
        if (busyTime.start < busyTime.end) {
            for (let i = busyTime.start; i < busyTime.end; i++) {
                freeTimes.push({ start: i, end: i + 1 });
            }
        } else {
            for (let i = busyTime.start; i < 24; i++) {
                freeTimes.push({ start: i, end: i + 1 });
            }
            for (let i = 0; i < busyTime.end; i++) {
                freeTimes.push({ start: i, end: i + 1 });
            }
        }
    });
    return freeTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let availableTimes: TimeBlock[] = [];
    busyTimes.forEach(busyTime => {
        busyTime.start = Math.max(busyTime.start, 0);
        busyTime.end = Math.min(busyTime.end, 24);
        busyTime.start = Math.min(busyTime.start, busyTime.end);
        busyTime.end = Math.max(busyTime.start, busyTime.end);
        for (let i = busyTime.start; i < busyTime.end; i++) {
            if (!availableTimes.some(time => time.start === i)) {
                availableTimes.push({ start: i, end: i });
            }
        }
    });
    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    let availableTimes: TimeBlock[] = [];
    busyTimes.forEach(time => {
        let start = time.start;
        let end = time.end;
        busyTimes.forEach(otherTime => {
            if (
                otherTime.start <= end &&
                otherTime.end >= start
            ) {
                start = Math.min(start, otherTime.start);
                end = Math.max(end, otherTime.end);
            }
        });
        availableTimes.push({ start, end });
    });
    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    const availableTimes: TimeBlock[] = [];
    const busyTimesMap: { [key: string]: TimeBlock } = {};

    busyTimes.forEach(busyTime => {
        busyTimesMap[`${busyTime.start}-${busyTime.end}`] = busyTime;
    });

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            const key = `${i}:${j}`;
            if (!busyTimesMap[key]) {
                availableTimes.push({
                    start: i,
                    end: i + 1
                });
            }
        }
    }

    return availableTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    const freeTimes: TimeBlock[] = [];

    busyTimes.forEach(function (busyTime) {
        busyTime.end = busyTime.end - busyTime.start;
        busyTime.start = 0;

        // if freeTime overlaps with busyTime, then merge them
        busyTimes.forEach(function (freeTime) {
            if (freeTime.end > busyTime.start && freeTime.start < busyTime.end) {
                freeTime.end = Math.max(freeTime.end, busyTime.end);
                freeTime.start = Math.min(freeTime.start, busyTime.start);
            }
        });

        // add freeTime to freeTimes
        if (busyTime.end > 0) {
            freeTimes.push(busyTime);
        }
    });

    return freeTimes;
}

=======

function getAvailableTimes(busyTimes: TimeBlock[]): TimeBlock[] {
    // TODO: Implement
    return [];
}
*/