import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ data }) {
    const result = calculateInvestmentResults(data);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                
            </thead>
            <tbody>
                {result.map((x) => {
                    const totalInterest = x.valueEndOfYear - x.annualInvestment * x.year - initialInvestment;
                    const totalAmountInvested = x.valueEndOfYear - totalInterest;
                    return (<>
                        <tr key={x.year}>
                            <td>{x.year}</td>
                            <td>{formatter.format(x.valueEndOfYear)}</td>
                            <td>{formatter.format(x.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    );
}