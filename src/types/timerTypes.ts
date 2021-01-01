export type TimerButtonProps = {
    buttonAction: () => void,
    buttonValue: string,
    disable: boolean
}

export type TimerScreenProps = {
    minutes: number,
    seconds: number
}