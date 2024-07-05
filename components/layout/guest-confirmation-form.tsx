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
import { Spinner } from '@/components/ui/spinner'

const formSchema = z.object({
  access_key: z.string(),
  jmeno_prijmeni: z.string().min(5, {
    message: 'Jméno a příjmení musí mít alespoň 5 znaků.',
  }),
  ucast_na_svatbe: z
    .string({
      message: 'Musíte zvolit jednu z možností pro účast na svatbě.',
    })
    .nullable()
    .refine((val) => val === 'ano' || val === 'ne'),
  ubytovani: z
    .string({
      message: 'Musíte zvolit jednu z možností pro ubytování.',
    })
    .nullable()
    .refine((val) => val === 'ano' || val === 'ne'),
  poznamka: z.string().optional(),
  pocetDeti: z
    .number({
      message: 'Počet dětí je povinný pole a musí být větší nebo roven 0.',
    })
    .int()
    .min(0),
  jmenaDeti: z.string().optional(),
})

function GuestConfirmationForm() {
  const [showConfetti, setShowConfetti] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { width, height } = useWindowSize()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      access_key: process.env.NEXT_PUBLIC_WEB3_FORM,
      jmeno_prijmeni: '',
      ucast_na_svatbe: undefined,
      ubytovani: undefined,
      poznamka: '',
      pocetDeti: 0,
      jmenaDeti: '',
    },
  })

  const { reset } = form

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('🚀 ~ onSubmit ~ data:', data)
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
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false)
      }, 10_000)

      return () => clearTimeout(timer)
    }
  }, [showConfetti])

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
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col items-start gap-4 rounded-md border p-4">
                    <FormLabel>
                      Zůstanete přes noc? (Každý si hradí sám. Cena cca 800 Kč / osoba)
                    </FormLabel>
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
                    <div className="flex w-full flex-col gap-2">
                      <FormField
                        control={form.control}
                        name="pocetDeti"
                        render={({ field }) => (
                          <FormItem className="flex flex-col gap-2">
                            <FormLabel>Počet dětí</FormLabel>
                            <Input {...field} type="number" min="0" className="text-blue" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="jmenaDeti"
                        render={({ field }) => (
                          <FormItem className=" flex flex-col gap-2">
                            <FormLabel>Jména dětí</FormLabel>
                            <Input
                              {...field}
                              type="text"
                              className="text-blue"
                              placeholder="Jména oddělená čárkou"
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )
              }}
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
          <Button className="text-2xl" variant="default" type="submit">
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="flex items-center gap-8">
                Odeslat <Mail />
              </div>
            )}
          </Button>
        </form>
      </Form>
      {showConfetti && <Confetti width={width} height={height} />}
    </div>
  )
}
export default GuestConfirmationForm
