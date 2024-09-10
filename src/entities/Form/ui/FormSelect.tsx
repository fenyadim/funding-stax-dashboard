"use client"

import { FormControl, FormField, FormItem, FormLabel, FormMessage, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui";
import { cn } from "@/shared/utils/utils";
import { type FieldValues, type Path, useFormContext } from "react-hook-form";

export interface ISelectOption {
  key: string
  value: string
}

interface IFormSelect<T extends FieldValues> {
  name: Path<T>
  label: string
  placeholder: string
  options: ISelectOption[]
  className?: string
}

export const FormSelect = <T extends FieldValues>({ name, label, placeholder, options, className }: IFormSelect<T>) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col gap-2', className)}>
          <FormLabel className='text-muted-foreground ml-3'>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className={cn('!mt-0')}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ key, value }) => (
                <SelectItem key={key} value={key}>{value}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem >
      )}
    />
  )
}
