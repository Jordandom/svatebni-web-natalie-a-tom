import { H1 } from '@/components/ui/typography'

export const DressCode = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <H1 className="uppercase">
        <span className="underline-offset-3 text-blue decoration-8">Dress code</span>
      </H1>
      <div className="text-center">
        Co na sebe a v jakém stylu bude svatba? Svatba bude laděna do barvy dusty blue, takže pokud
        budete chtít, můžete se sladit s námi. Oblečte se hlavně tak, abyste se cítili dobře a
        pohodlně ale vyvarujte se prosím černým a bílým oděvům.
      </div>
    </div>
  )
}
