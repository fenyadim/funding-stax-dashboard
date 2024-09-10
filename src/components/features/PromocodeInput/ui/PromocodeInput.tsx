'use client'

import { Button, Flex, Input, Label } from "@/shared/ui";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

interface IPromocodeInput {
  onChange: (value: string) => void
}

export const PromocodeInput = ({ onChange }: IPromocodeInput) => {
  const [value, setValue] = useState('')

  const hangleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onChange(value)
    // prisma.promocode.findFirst({
    //   where: {
    //     code: value
    //   }
    // })
  }

  return <Flex direction='column' align='start' gap={8}>
    <Label className='text-muted-foreground ml-3'>Promocode</Label>
    <Flex gap={8} max>
      <Input name='promo' value={value} onChange={hangleChange} />
      <Button onClick={handleClick}>Save</Button>
    </Flex>
  </Flex>
}