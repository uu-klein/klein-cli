export type statusProps = 'logo' | 'success' | 'fail' | 'error';

export type props<T> = {
    [P in keyof T]?: T[P]
};

export type answersProps = {
    author: string,
    isRoot: boolean,
    language: string,
    isTs: boolean,
    projectName: string,
}




