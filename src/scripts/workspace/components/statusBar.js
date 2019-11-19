import React from 'react';
import Button from './button';
import { MODE_TAGS } from '../../util/constants';
import Notifications from './notifications';

export default ({ mode, save, edit, message, rune }) => (
    <div className="statusbar">
        <span className="tag">{MODE_TAGS[mode]} mode</span>
        {rune && (
            <>
                <Button onClick={save}>Save</Button>
                <Button onClick={edit}>Edit</Button>
            </>
        )}
        {rune && <p>{rune.name}</p>}
        <Notifications notifications={[message]} />
    </div>
);
