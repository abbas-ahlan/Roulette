type Construct = 
{
    id: string,
    rolls: number[] | string[],
    probabilitiess?: number[],
    colors?: string[],
    duration?: number,
    arrow?: newArrow,
    landing?: 'precise' | 'loose',
    audio?: {
        play?: 'once' | 'multiple',
        volume?: number,
        dir?: string,
    },
    text?: TextData,
    rotate?: number,
    diameter?: number,
    shrink?: number,
};

export type TextData = {
    font?: newFont,
    before?: string,
    after?: string,
    rotate?: number
}

export type newFont = {
    size?: number,
    weight?: number,
    color?: string,
}

export type newArrow = {
    element?: string | HTMLElement,
    width?: number,
    fill?: string,
    rotate?: number
};

export type Standard = Construct & {
    type?: 'standard',
}

export type Doughnut = Construct & {
    type: 'doughnut',
    doughnut: { diameter: number, fill?: string},
}

export type Custom = Construct & {
    type: 'image',
    image: { src: string, angle?: number },
}
