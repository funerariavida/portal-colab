'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type DropdownRadioMenuProps = {
  menuPosition?: string
  filterCollumns: string[]
  selectedOption: string
  setSelectedOption: Dispatch<SetStateAction<string>>
}

export default function DropdownRadioMenu({
  menuPosition,
  filterCollumns,
  selectedOption,
  setSelectedOption,
}: DropdownRadioMenuProps) {
  const [position, setPosition] = useState(menuPosition ?? 'bottom')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize focus:ring-0">
          {selectedOption !== '' ? selectedOption : 'Filtro'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Escolha seu filtro</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {filterCollumns.map((column, index) => {
            return (
              <DropdownMenuRadioItem
                key={index}
                value={column}
                className="capitalize"
                onClick={() => setSelectedOption(column)}
              >
                {column}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
