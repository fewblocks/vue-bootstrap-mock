export type SpeechBalloon = {
    id: Number;
    top: Number;
    left: Number;
    line: string;
    directions: string | "top" | "right" | "bottom" | "left";
    transform: Number;
};
