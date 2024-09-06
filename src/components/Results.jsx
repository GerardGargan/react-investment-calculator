import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ data }) {
    console.log(data);
    const result = calculateInvestmentResults(data);
    console.log(result);
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