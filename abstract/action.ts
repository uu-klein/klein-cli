import {props} from "../types";

export abstract class AbstractAction {
    public abstract handle<T extends props<T>>(input?: string[]): Promise<void>
}