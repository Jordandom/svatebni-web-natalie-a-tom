'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { toast } from 'sonner'
import { Checkbox } from '@/components/ui/checkbox'
import { Mail } from 'lucide-react'

const formSchema = z.object({
  access_key: z.string(),
  jmeno_prijmeni: z.string().min(5, {
    message: 'Jméno a příjmení musí mít alespoň 5 znaků.',
  }),
  ucast_na_svatbe: z
    .string()
    .nullable()
    .refine((val) => val === 'ano' || val === 'ne', {
      message: 'Musíte zvolit jednu z možností pro účast na svatbě.',
    }),
  ubytovani: z
    .string()
    .nullable()
    .refine((val) => val === 'ano' || val === 'ne', {
      message: 'Musíte zvolit jednu z možností pro ubytování.',
    }),
  poznamka: z.string().optional(),
})

export function GuestConfirmationForm() {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  // TODO: Add loading state
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { width, height } = useWindowSize()

  console.log('🚀 ~ GuestConfirmationForm ~ isLoading:', isLoading)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      access_key: '05118227-c481-4f67-8882-aab298c4f9a9',
      jmeno_prijmeni: '',
      ucast_na_svatbe: null,
      ubytovani: null,
      poznamka: '',
    },
  })

  const { reset } = form

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json()
        if (json.success) {
          toast.success('Děkujeme za potvrzení!')
          setShowConfetti(true)
          reset()
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('Něco se nepovedlo. Zkuste to prosím znovu.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 10_000)

      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  if (!isMounted) return

  return (
    <div className="relative w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-stretch gap-8"
        >
          <div className="flex flex-col items-stretch gap-4">
            <FormField
              control={form.control}
              name="jmeno_prijmeni"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-4 rounded-md border p-4">
                  <FormLabel>Jméno a příjmení</FormLabel>
                  <FormControl>
                    <Input className="text-blue" placeholder="Jméno a příjmení" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ucast_na_svatbe"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-4 rounded-md border p-4">
                  <FormLabel>Přijdete na naši svatbu?</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FormLabel htmlFor="come-to-wedding-yes">Ano</FormLabel>
                        <Checkbox
                          id="come-to-wedding-yes"
                          className="size-6"
                          checked={field.value === 'ano'}
                          onCheckedChange={() => field.onChange('ano')}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <FormLabel htmlFor="come-to-wedding-no">Ne</FormLabel>
                        <Checkbox
                          id="come-to-wedding-no"
                          className="size-6"
                          checked={field.value === 'ne'}
                          onCheckedChange={() => field.onChange('ne')}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ubytovani"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-4 rounded-md border p-4">
                  <FormLabel>Zůstanete přes noc?</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FormLabel htmlFor="stay-over-night-yes">Ano</FormLabel>
                        <Checkbox
                          id="stay-over-night-yes"
                          className="size-6"
                          checked={field.value === 'ano'}
                          onCheckedChange={() => field.onChange('ano')}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <FormLabel htmlFor="stay-over-night-no">Ne</FormLabel>
                        <Checkbox
                          id="stay-over-night-no"
                          className="size-6"
                          checked={field.value === 'ne'}
                          onCheckedChange={() => field.onChange('ne')}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="poznamka"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start gap-4 rounded-md border p-4">
                  <FormLabel>Poznámka</FormLabel>
                  <FormControl>
                    <Textarea className="text-blue" placeholder="Poznámka" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className="flex items-center gap-8 text-2xl" variant="default" type="submit">
            Odeslat
            <Mail />
          </Button>
        </form>
      </Form>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  )
}
