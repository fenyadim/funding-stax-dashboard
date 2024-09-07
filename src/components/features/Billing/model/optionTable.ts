import { IOptions } from "@/entities/AppTable";
import { IBilling } from "./columnsBilling";

export const optionTable: IOptions<IBilling> = {
    search: {
        label: 'Order number',
        column: 'order'
    },
    calendarRange: {
        column: 'date'
    },
    selectSort: [
        {
            label: 'Status',
            column: 'status',
            variants: [
                {
                    key: 'waiting',
                    value: 'Waiting',
                },
                {
                    key: 'processing',
                    value: 'Processing',
                },
                {
                    key: 'completed',
                    value: 'Completed',
                },
                {
                    key: 'incomplete',
                    value: 'Incomplete',
                },
            ]
        },
        {
            label: 'Payment method',
            column: 'payment',
            variants: [
                {
                    key: 'crypto',
                    value: 'Crypto'
                },
                {
                    key: 'card',
                    value: 'Card'
                }
            ]
        }
    ]
}