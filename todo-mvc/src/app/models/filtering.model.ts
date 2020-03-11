export interface FIlterButton {
    type : Filter;
    label: string;
    isActive: boolean;
}
export enum Filter {
    All,
    Active,
    Compelted
}