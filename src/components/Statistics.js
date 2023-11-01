import { StatisticsWrapper, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsText } from "./Statistics.styled"

export const Statistics = ({title, stats}) => {
    return(
        <StatisticsWrapper>
            <StatisticsTitle>{title}</StatisticsTitle>
            <StatisticsList>
                {stats.map(stat => {
                    return(
                        <StatisticsItem key = {stat.id}>
                            <span>{stat.label}</span>
                            <StatisticsText>{stat.percentage}%</StatisticsText>
                        </StatisticsItem>
                    )
                })}
            </StatisticsList>
        </StatisticsWrapper>
    )
}