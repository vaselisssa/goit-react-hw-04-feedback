import React from 'react';
import { StatiscticList, StatisticItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StatiscticList>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {percentage}%</StatisticItem>
    </StatiscticList>
  );
};

export default Statistics;
