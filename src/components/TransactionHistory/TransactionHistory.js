import { Table, TableHead, Title, TableBody } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) =>{
    return(
        <Table>
            <TableHead>
                <tr>
                    <Title>Type</Title>
                    <Title>Amount</Title>
                    <Title>Currency</Title>
                </tr>
            </TableHead>

            <TableBody>
                {items.map(({id, type, amount, currency}) => {
                    return(
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </TableBody>
        </Table>
    )
}