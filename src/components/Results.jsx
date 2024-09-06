import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ data }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const result = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });
    return (
        <table>
            <thead>
                
                <th>Year</th>
                <th>Interest</th>
                <th>Value end of year</th>
                <th>Duration</th>
                
            </thead>
            <tbody>
                {result.map((x) => {
                    return (<>
                        <tr>
                            <td>{x.year}</td>
                            <td>{x.interest}</td>
                            <td>{x.valueEndOfYear}</td>
                            <td>{x.annualInvestment}</td>
                        </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    );
}