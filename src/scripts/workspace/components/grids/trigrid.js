import React from 'react';
import { Line, Vline, Hline, Group } from '../../components';
import { COLORS, getOpp, PI } from '../../../util';

import * as util from '../../../util';
console.log(util);

const UNIT_LINE_OPACITY = 1;
const DIVISION_LINE_OPACITY = 0.3;
const UNIT_LINE_COLOR = COLORS.BLUE;
const DIVISION_LINE_COLOR = COLORS.BLUE;

export function TriGridLines(props) {
    const { gridUnit, xUnits, yUnits, height, width, divisions } = props;
    console.log(props);

    const lines = [];

    const angle = PI / 3;

    const size = gridUnit;
    /* const height = getOpp(angle, */

    // Generate tris
    // const currentHeight = height;
    // const currentWidth = width;
    /* console.log(PI, getOpp); */

    let currentHeight = 0;
    while (currentHeight < height) {
        const opp = getOpp(angle, height - currentHeight);
        lines.push(<Line color={UNIT_LINE_COLOR} opacity={UNIT_LINE_OPACITY} x1={0} y1={currentHeight} x2={opp} y2={height} />);
        lines.push(<Line color={UNIT_LINE_COLOR} opacity={UNIT_LINE_OPACITY} x1={width} y1={currentHeight} x2={width - opp} y2={height} />);
        currentHeight += size;
    }

    // const triBaseg

    // for (let i = 0; i <= Math.max(xUnits, yUnits); i++) {
    //     if (i <= yUnits) lines.push(<Hline key={lines.length} y={i * gridUnit} x={0} color={UNIT_LINE_COLOR} length={width} opacity={UNIT_LINE_OPACITY} />);
    // if (i <= xUnits) lines.push(<Vline key={lines.length} x={i * gridUnit} y={0} color={UNIT_LINE_COLOR} length={height} opacity={UNIT_LINE_OPACITY} />);
    // }

    // lines.push(
    //     <Hline key={lines.length} y={height / 2} x={0} color={COLORS.RED} length={width} />,
    // <Vline key={lines.length + 1} x={width / 2} y={0} color={COLORS.RED} length={height} />
    // );

    console.log('Lines', lines);

    return <Group>{lines}</Group>;
}

export default function TriGrid(props) {
    const [xUnits, yUnits, gridUnit = 20, divisions = 1, offsetX = 0, offsetY = 0] = props.args;
    const width = xUnits * gridUnit;
    const height = yUnits * gridUnit;
    const newProps = {
        width,
        height,
        gridUnit,
        xUnits,
        yUnits,
        // divisions,
        offsetX,
        offsetY,
    };

    console.log('TRI GRID PROPS', newProps);

    return (
        <svg className="background-svg" height={height} width={width} background="teal">
            <g transform={`translate(${offsetX}, ${offsetY})`}>
                <TriGridLines {...newProps} />
            </g>
        </svg>
    );
}
