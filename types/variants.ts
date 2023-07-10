export interface variants {
  primary: string
  secondary: string
  third: string
}

export enum enumVariants {
  primary = 'primary',
  secondary = 'secondary',
  third = 'third',
}

export interface Sizes {
  superSmall?: string
  custom?: string
  small: string
  medium: string
  large: string
}

export enum enumSizes {
  custom = 'custom',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface headingSizes {
  big: string
  medium: string
  small: string
}

export enum enumHeadingSizes {
  big = 'big',
  medium = 'medium',
  small = 'small',
}
