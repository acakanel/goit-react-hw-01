import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.tableHead}>
                <tr>
                    <th className={s.tableHeader}>Type</th>
                    <th className={s.tableHeader}>Amount</th>
                    <th className={s.tableHeader}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => (
                    <tr key={item.id}
                    className={index % 2 === 0 ? s.rowEven : s.rowOdd}>
                        <td className={s.cell}>{item.type}</td>
                        <td className={s.cell}>{item.amount}</td>
                        <td className={s.cell}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


export default TransactionHistory;