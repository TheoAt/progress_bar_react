import './progressBar.css'

export default function ProgressBar({ steps, activeStep, setActiveStep }) {

    const handlePreviousStep = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0))
    }

    const handleNextStep = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1))
    }

    const calculateWidth = () => {
        return `${(100 / (steps.length - 1)) * activeStep}%`
    }

    return (
        <div>
            <div className="steps">
                {steps && steps.length > 0
                    ? steps.map((stepItem, index) => (
                        <div className={`step ${index <= activeStep ? 'active' : ''}`} style={{ width: calculateWidth() }} key={index}>
                            {stepItem}
                        </div>
                    ))
                    : null}
            </div>
            <div className="step-buttons-container">
                <button disabled={activeStep === 0} onClick={handlePreviousStep}>Previous Step</button>
                <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>Next Step</button>
            </div>
        </div>
    )
}