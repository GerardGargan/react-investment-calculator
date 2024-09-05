export default function UserInput({ data, onDataChange }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input type="number" value={data.initialInvestment} name="initialInvestment" onChange={onDataChange} />
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input type="number" value={data.annualInvestment} name="annualInvestment" onChange={onDataChange} />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected Return</label>
                    <input type="number" value={data.expectedReturn} name="expectedReturn" onChange={onDataChange} />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="number" value={data.duration} name="duration" onChange={onDataChange} />
                </div>
            </div>
        </div>
    )
}