import { H1 } from '@/components/ui/typography'

export const Gifts = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <H1 className="uppercase">
        <span className="underline-offset-3 text-blue decoration-8">Svatební dary</span>
      </H1>
      <div className="text-center">
        Největším darem pro nás je naše láska, kterou s Vámi můžeme dnes oslavit, a proto, pokud
        přemýšlíte o dárku, uvítáme finanční příspěvek na společný život, který nám pomůže začít
        naši společnou cestu. Děkujeme vám.
      </div>
    </div>
  )
}
