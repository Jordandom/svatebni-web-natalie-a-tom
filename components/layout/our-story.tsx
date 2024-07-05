import { Meteors } from '@/components/ui/meteors'
import { H1 } from '@/components/ui/typography'

const OurStory = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-8">
      <H1 className="uppercase">
        <span className="underline-offset-3 text-blue decoration-8">Náš příběh</span>
      </H1>
      <div className="flex flex-col gap-4">
        <div>
          Náš příběh začal v dubnu 2020 na Letišti Václava Havla v Praze. Byl covid a tvrdý lock
          down, ale nám stačil pouze služební vchod č.&nbsp;25, aby přeskočila první jiskra. Nebylo
          lehké pokračovat v seznamování, a proto Naty společně s kamarádkou Verčou vymyslely “akci
          shaker”, aby se prolomily další ledy.
        </div>
        <div>
          Po neustalém flirtování, vyhlížení, jestli není zrovna ten druhý v práci a nespočtu
          krásných zpráv jsme si po půl roce dali první rande. Restaurace, kina, divadla, to vše
          bylo zavřené, proto Tomáš pozval Naty na procházku a domácí večeři. Kdyby Naty tušila, že
          procházka bude mít 10 kiláčků, nebrala by si kozačky na podpatku. Doma ji však čekala
          zasloužená královská večeře - zapečené těstoviny.
        </div>
        <div>
          Po třech letech, nespočtu dovolených, jedné kočce, společném stěhování, dvou titulech a
          skoro dvouměsíčnímu vojenskému odloučení se Tomáš vyslovil na tom nejkrásnějším místě,
          kterým mohl být jedině Key West na Floridě. Ale to nejkrásnější nás teprve čeká.
        </div>
      </div>
      <Meteors number={20} />
    </div>
  )
}

export default OurStory
