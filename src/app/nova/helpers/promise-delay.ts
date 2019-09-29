export function promiseDelay(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
}
