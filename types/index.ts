/**
 * console
 * */

export type statusProps = 'logo' | 'success' | 'fail' | 'error';

export type paramsProp<T> = {
    [P in keyof T]?: T[P]
};


