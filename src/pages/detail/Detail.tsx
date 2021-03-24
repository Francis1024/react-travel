import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
	touristRouteId: string;
}

export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => (
	<div>详情页面,详情ID:{props.match.params.touristRouteId}</div>
);
