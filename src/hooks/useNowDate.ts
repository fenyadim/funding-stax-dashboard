import moment from "moment";
import { useEffect, useState } from "react";

export const useNowDate = (locale: 'en' | 'ru'): [time: string, date: string] => {
    if (locale === 'ru') {
        require('moment/locale/ru')
    }

    const [date, setDate] = useState<string>('')
    const [time, setTime] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('LL'))
            setTime(moment().format('LT'))
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return [
        time,
        date
    ]
}