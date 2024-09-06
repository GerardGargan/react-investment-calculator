export default function UserInput({ data, onDataChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={data.initialInvestment} name="initialInvestment" onChange={onDataChange} required />
                </p>
                <p>                        
                    <label>Annual Investment</label>
                    <input type="number" value={data.annualInvestment} name="annualInvestment" onChange={onDataChange} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={data.expectedReturn} name="expectedReturn" onChange={onDataChange} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={data.duration} name="duration" onChange={onDataChange} required />
                </p>
            </div>
        </section>
    )
}