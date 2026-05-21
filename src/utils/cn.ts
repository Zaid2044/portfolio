export function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return clsx(...classes)
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export const mapRange = (
  value: number,
  min: number,
  max: number,
  newMin: number,
  newMax: number
) => {
  const normalized = (value - min) / (max - min)
  return newMin + normalized * (newMax - newMin)
}
