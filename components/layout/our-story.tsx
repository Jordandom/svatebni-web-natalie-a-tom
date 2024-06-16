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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt libero, ad atque
          nostrum cumque harum sit eligendi dolorem fugiat dicta quisquam corporis unde accusamus
          provident culpa aliquid. Rem, repellat?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt libero, ad atque
          nostrum cumque harum sit eligendi dolorem fugiat dicta quisquam corporis unde accusamus
          provident culpa aliquid. Rem, repellat?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt libero, ad atque
          nostrum cumque harum sit eligendi dolorem fugiat dicta quisquam corporis unde accusamus
          provident culpa aliquid. Rem, repellat?
        </div>
      </div>
      <Meteors number={20} />
    </div>
  )
}

export default OurStory
