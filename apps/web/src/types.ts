export type WithChildren<T> = T & { children?: React.ReactNode }
export type FCC<T = object> = React.FC<WithChildren<T>>
