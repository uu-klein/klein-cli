// 接收参数
export interface Inputs {
    name: string
}

export abstract class AbstractAction {
    public abstract handle(input?: Inputs[]): Promise<void>
}