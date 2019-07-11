import React, { useState } from 'react';
import { modes } from '../../util/constants';
import { OverlayLayer, GridLayer, RenderLayer } from './layers';
import { Data } from '../../data';

function Renderer(props) {
    const { rune, lexed, mode } = props;
    const defaultHeight = 50; //rune.y * rune.gridUnit;
    const defaultWidth = 50; //rune.x * rune.gridUnit;
    const { width, height } = lexed
        .filter(t => t.type === 'grid')
        .reduce(
            (a, b) => {
                a.width = Math.max(b.args[0] * b.args[2], a.width);
                a.height = Math.max(b.args[1] * b.args[2], a.height);
                return a;
            },
            { width: defaultWidth, height: defaultHeight }
        );
    const verticalPadding = height / rune.y / 2;
    const horizontalPadding = width / rune.x / 2;

    const arcs = [];

    return (
        <div className="renderer">
            <div
                className="canvas"
                style={{
                    width,
                    height,
                    padding: `${verticalPadding}px ${horizontalPadding}px`,
                }}>
                <p className="canvas-label">
                    {rune.name}{' '}
                    <span className="canvas-size">
                        ({rune.x}x{rune.y})
                    </span>
                </p>
                <RenderLayer
                    width={width}
                    height={height}
                    elements={props.elements}
                    onRender={props.onRender}
                />
                {mode !== modes.PREVIEW && (
                    <OverlayLayer width={width} height={height} lexed={lexed} />
                )}
            </div>
        </div>
    );
}

export default Renderer;
// <GridLayer
//     width={width}
//     height={height}
//     gridUnit={rune.gridUnit}
//     xUnits={rune.x}
//     yUnits={rune.y}
//     divisions={rune.divisions}
// />
