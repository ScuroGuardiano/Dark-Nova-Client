/**
 * @author ScuroGuardiano
 * @copyright ScuroGuardiano (C) 2019
 * @license MIT <https://opensource.org/licenses/MIT>
 */

import { promiseDelay } from './promise-delay';

/**
 * Function that calls given function with retries and delay WITHOUT RXJS, IHAA  
 * If succed this what given function returned is returned, if not last thrown error is thrown. Simple xD
 * @param fn Function to be called with retries
 * @param times How many times retry failed request
 * @param delay Delay between retries in ms
 */
export async function promiseRetry(fn: () => any | Promise<any>, times: number, delay: number) {
    // RxJS and retry function are for kids,
    // loops and lots of shitty code are for men!
    let retryCount = 2;
    let finished = false;
    let lastError: any = null;
    let returnValue: any;
    do {
        try {
            returnValue = await fn();
            finished = true;
        }
        catch (err) {
            retryCount--;
            lastError = err;
            await promiseDelay(delay);
        }
    } while(!finished && retryCount);

    if(finished) {
        return returnValue;
    }

    throw lastError;
}
