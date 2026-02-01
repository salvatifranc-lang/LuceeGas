import { useState } from 'react'
import { StepPeriodo } from '../steps/StepPeriodo'
import { StepConsumi } from '../steps/StepConsumi'
import { StepCosti } from '../steps/StepCosti'

type Props = {
  onComplete: () => void
}

export function BollettaWizard({ onComplete }: Props) {
  const [step, setStep] = useState(0)

  return (
    <>
      {step === 0 && <StepPeriodo onNext={() => setStep(1)} />}
      {step === 1 && <StepConsumi onNext={() => setStep(2)} />}
      {step === 2 && <StepCosti onNext={onComplete} />}
    </>
  )
}
