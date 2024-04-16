import { useState } from 'react'
import './progressBar.css'
import ProgressBar from './ProgressBar'

export default function ProgressionTest() {
    const [activeStep, setActiveStep] = useState(0)
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']

    return (
        <div className="step-progress-bar-container">
            <ProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
    )
}