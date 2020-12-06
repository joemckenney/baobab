import $ from 'jquery'

export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export enum Alignment {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export const FLOATING_OFFSET = 6

interface Props {
  activator: HTMLDivElement | null
  alignment: Alignment
  box: HTMLDivElement | null
  placement: Placement
}

const position = ({ activator, alignment, box, placement }: Props) => {
  let left
  let top

  if (!activator || !box) {
    return {}
  }
  const $activator = $(activator)
  const $box = $(box)

  const boxW = $box.outerWidth()
  const boxH = $box.outerHeight()

  const activatorO = $activator.offset()
  const activatorW = $activator.outerWidth()
  const activatorH = $activator.outerHeight()

  if (
    activatorO == null ||
    activatorH == null ||
    activatorW == null ||
    boxH == null ||
    boxW == null
  ) {
    return {}
  }

  const position = {
    top: activatorO.top,
    left: activatorO.left,
    bottom: activatorH + activatorO.top,
    right: activatorW + activatorO.left,
  }

  switch (placement) {
    case Placement.Top:
      top = position.top - FLOATING_OFFSET - boxH
      break
    case Placement.Bottom:
      top = position.bottom + FLOATING_OFFSET
      break
    case Placement.Left:
      left = position.left - boxW - FLOATING_OFFSET
      break
    case Placement.Right:
      left = position.left + activatorW + FLOATING_OFFSET
      break
  }

  switch (alignment) {
    case Alignment.Top:
      top = position.top
      break
    case Alignment.Bottom:
      top = position.top + activatorH - boxH
      break
    case Alignment.Left:
      left = position.left
      break
    case Alignment.Right:
      left = position.left - boxW + activatorW
      break
  }

  return { left, top }
}

export default position
